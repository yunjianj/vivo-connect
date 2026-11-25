import { ApiError } from './core.mjs';

export function isCameraAudio(payload) {
  if (payload.length < 7 || payload.length > 256 * 1024) return false;
  let offset = 0;
  while (offset < payload.length) {
    if (payload.length - offset < 7 || payload[offset] !== 255 ||
        (payload[offset + 1] & 0xf6) !== 0xf0 || ((payload[offset + 2] >> 2) & 15) >= 13) return false;
    const size = ((payload[offset + 3] & 3) << 11) | (payload[offset + 4] << 3) | (payload[offset + 5] >> 5);
    if (size <= (payload[offset + 1] & 1 ? 7 : 9) || size > payload.length - offset) return false;
    offset += size;
  }
  return true;
}

export function lensConfig(config, capabilities, facing) {
  const live = String(config.cameraShareMode) === '2';
  const configKey = live ? 'liveCameraConfig' : 'normalCameraConfig';
  const capabilityKey = live ? 'liveCameraCapability' : 'normalCameraCapability';
  const lens = facing === 'front' ? 'frontMaster' : live ? 'Master' : 'Back';
  const available = capabilities[capabilityKey]?.cameraInfos;
  if (!Array.isArray(available) || !available.includes(lens) || !config[configKey] ||
      typeof config[configKey] !== 'object' || Array.isArray(config[configKey])) {
    throw new ApiError(409, 'CAMERA_LENS_UNAVAILABLE', '手机未提供所选镜头');
  }
  return 'PC_UPDATE_CAMERA_PARA:' + JSON.stringify({
    ...config, [configKey]: { ...config[configKey], cameraType: lens }
  });
}

const statusPrefix = 'PC_GET_CAMERA_STATUS:';
const configLimit = 512 * 1024;

export function rememberCameraStatus(phone, data, binary) {
  if (binary || data.length > 2048 || data.subarray(0, statusPrefix.length).toString() !== statusPrefix) return;
  try {
    const state = String(JSON.parse(data.toString().slice(statusPrefix.length))?.state);
    if (state === '0' || state === '1') phone.cameraServiceEnabled = state === '1';
  } catch { /* Ignore malformed status without replacing the last known value. */ }
}

export function startCameraAuthorization(mirror, { send, approved, fail }) {
  const config = Object.create(null), capabilities = Object.create(null);
  let enabled = mirror.phone.cameraServiceEnabled;
  let enableRequested = false, asked = false, granted = false, refreshedConfig = false, opening = false, shareMode;
  const signal = mirror.controller.signal;
  const write = message => send(message).catch(() => fail('无法发送共享相机授权请求'));
  const merge = (target, fields) => {
    for (const [key, value] of Object.entries(fields)) if (value !== null) target[key] = value;
    if (Buffer.byteLength(JSON.stringify(target)) > configLimit) throw new Error('Oversized camera configuration');
  };

  function maybeAsk(useDefault = false) {
    if (asked || signal.aborted) return;
    if (enabled === false) {
      mirror.permissionHint = '请在手机互传中开启共享相机服务';
      if (!enableRequested) {
        enableRequested = true;
        write('PC_ENABLE_CAMERA_AUTH:');
      }
      return;
    }
    const mode = String(config.cameraShareMode);
    if (mode !== '1' && mode !== '2' && !useDefault) return;
    shareMode = mode === '2' ? 2 : 1;
    asked = true;
    mirror.permissionHint = '请在手机上确认共享相机授权';
    write('PC_REQUEST_CAMERA_AUTH:' + JSON.stringify({ share_mode: shareMode, start_from: 'vivo Connect' }));
  }

  let pendingConfig;
  function applyLens(facing) {
    if (pendingConfig) throw new ApiError(409, 'CAMERA_CONFIG_PENDING', '相机镜头正在设置');
    if (signal.aborted) throw new ApiError(409, 'CAMERA_CLOSED', '共享相机已结束');
    if (Number(config.cameraShareMode ?? shareMode) !== shareMode)
      throw new ApiError(409, 'CAMERA_MODE_CHANGED', '手机共享相机模式已改变');
    const command = lensConfig(config, capabilities, facing);
    return new Promise((resolve, reject) => {
      const complete = error => {
        if (!pendingConfig) return;
        pendingConfig = undefined;
        clearTimeout(timer);
        signal.removeEventListener('abort', cancelled);
        if (error) reject(error);
        else {
          mirror.facing = facing;
          resolve({ facing });
        }
      };
      const cancelled = () => complete(new ApiError(409, 'CAMERA_CLOSED', '共享相机已结束'));
      const timer = setTimeout(() => {
        complete(new ApiError(504, 'CAMERA_CONFIG_TIMEOUT', '手机未确认镜头设置'));
        fail('手机未确认镜头设置，请重新开启共享');
      }, 5000);
      pendingConfig = complete;
      signal.addEventListener('abort', cancelled, { once: true });
      send(command).catch(() => {
        if (pendingConfig === complete) complete(new ApiError(502, 'CAMERA_CONFIG_SEND_FAILED', '无法发送镜头设置'));
      });
    });
  }

  function maybeOpen() {
    if (opening || !granted || !refreshedConfig || !Object.keys(capabilities).length) return;
    if (enabled === false || Number(config.cameraShareMode ?? shareMode) !== shareMode)
      return fail('手机共享相机设置已改变');
    opening = true;
    void applyLens(mirror.facing).then(() => {
      if (signal.aborted) return;
      mirror.switchLens = applyLens;
      approved();
    }).catch(error => fail(error.message));
  }

  function receive(data, binary) {
    if (binary || data.length > configLimit || signal.aborted) return;
    const message = data.toString();
    const split = message.indexOf(':');
    if (split < 0) return;
    const type = message.slice(0, split);
    if (!['PC_GET_CAMERA_STATUS', 'PC_GET_CAMERA_CONFIG', 'PC_GET_CAMERA_CAPABILITY',
          'PC_RESPONSE_CAMERA_AUTH', 'PC_UPDATE_CAMERA_PARA', 'PHONE_TO_PC_CAMERA_RUN_STATE'].includes(type)) return;
    try {
      let body = JSON.parse(message.slice(split + 1));
      if (type === 'PHONE_TO_PC_CAMERA_RUN_STATE' && typeof body === 'string') body = JSON.parse(body);
      if (!body || typeof body !== 'object' || Array.isArray(body)) return;
      if (type === 'PC_UPDATE_CAMERA_PARA') {
        pendingConfig?.(String(body.state) === '1' ? null :
          new ApiError(409, 'CAMERA_CONFIG_REJECTED', '手机未接受镜头设置'));
        return;
      }
      if (type === 'PC_GET_CAMERA_STATUS') {
        const state = String(body.state);
        if (state !== '0' && state !== '1') return;
        enabled = state === '1';
        if (!enabled && granted) return fail('手机已关闭共享相机');
      } else if (type === 'PHONE_TO_PC_CAMERA_RUN_STATE') {
        if (mirror.status === 'streaming' && ['0', '2'].includes(String(body.state)))
          return fail('手机已暂停或结束共享相机');
      } else if (type === 'PC_GET_CAMERA_CAPABILITY') {
        merge(capabilities, body);
      } else if (type === 'PC_RESPONSE_CAMERA_AUTH') {
        if (!asked) return;
        if (String(body.auth) !== '1') return fail('手机未允许共享相机。请解锁手机并检查互传的共享相机权限');
        if (!granted) {
          granted = true;
          mirror.permissionHint = '手机已授权，正在读取镜头配置';
          write('PC_GET_CAMERA_CONFIG:');
        }
      } else {
        merge(config, body);
        if (granted) refreshedConfig = true;
      }
      maybeAsk();
      maybeOpen();
    } catch (error) {
      fail(error instanceof ApiError ? error.message : '手机返回的共享相机配置无效');
    }
  }
  mirror.onPermission = receive;
  mirror.phone.ws.on('message', receive);
  mirror.permissionHint = '正在查询手机共享相机设置…';
  write('PC_GET_CAMERA_CONFIG:');
  if (enabled === false) maybeAsk();
  // The official client defaults to mode 1 when the phone hasn't supplied its preferred mode.
  const fallback = setTimeout(() => maybeAsk(true), 1000);
  signal.addEventListener('abort', () => clearTimeout(fallback), { once: true });
}
