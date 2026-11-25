import { ApiError, requireThat } from './core.mjs';

const prefix = 'NOTIFY_CLIENT_RECEIVED_NOTIFICATION:';
const maxQueue = 32;
const lifetime = 60_000;

function cleanText(value, limit) {
  return typeof value === 'string' ? value.replace(/[\x00-\x08\x0b-\x1f\x7f]/g, '').slice(0, limit).trim() : '';
}

export function receiveNotification(session, bytes, isBinary) {
  if (session.status !== 'connected' || !session.notifications || isBinary || bytes.length > 32 * 1024) return;
  const message = bytes.toString();
  if (!message.startsWith(prefix)) return;
  let payload;
  try { payload = JSON.parse(message.slice(prefix.length)); } catch { return; }
  const title = cleanText(payload?.title, 256);
  const content = cleanText(payload?.content, 4096);
  if (!title && !content) return;
  const appName = cleanText(payload?.appName, 128) || cleanText(payload?.packageName, 128) || '手机通知';
  const queue = session.notifications;
  if (queue.length >= maxQueue) queue.shift();
  queue.push({ appName, title, content, receivedAt: Date.now() });
}

export async function configureNotifications(phones, session, enabled) {
  requireThat(typeof enabled === 'boolean', 'enabled 必须是布尔值');
  requireThat(session.status === 'connected', '手机会话已断开');
  if (session.notificationConfigPending) throw new ApiError(409, 'NOTIFICATION_CONFIG_PENDING', '正在更新通知同步设置');
  if (!enabled) delete session.notifications;
  session.notificationConfigPending = true;
  try {
    for (const update_place of ['notify', 'notifyOn']) {
      const config = { update_place, notify: enabled, notifyOn: enabled };
      await phones.sendMessage(session, 'PC_CONFIG:' + JSON.stringify(config),
        'NOTIFICATION_CONFIG_FAILED', '无法将通知同步设置发送至手机');
    }
    if (enabled && session.status === 'connected') session.notifications ??= [];
    return { enabled: Boolean(session.notifications) };
  } finally {
    delete session.notificationConfigPending;
  }
}

export function drainNotifications(sessions) {
  const cutoff = Date.now() - lifetime;
  const notifications = [];
  for (const session of sessions) {
    if (session.status !== 'connected' || !session.notifications) continue;
    for (const event of session.notifications.splice(0)) {
      if (event.receivedAt >= cutoff) notifications.push(event);
    }
  }
  return { notifications: notifications.sort((a, b) => a.receivedAt - b.receivedAt) };
}
