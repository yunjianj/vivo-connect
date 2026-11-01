import crypto from 'node:crypto';
import { ApiError } from './core.mjs';
export class Jobs {
  items = new Map();
  create(kind, action, sessionId) {
    const job = { id: crypto.randomUUID(), kind, sessionId, status: 'queued', createdAt: new Date().toISOString(),
      bytes: 0, controller: new AbortController() };
    this.items.set(job.id, job);
    job.done = Promise.resolve().then(async () => {
      job.status = 'running';
      try {
        job.result = await action(job, job.controller.signal);
        job.status = job.controller.signal.aborted ? 'cancelled' : 'succeeded';
      } catch (error) {
        job.status = job.controller.signal.aborted ? 'cancelled' : 'failed';
        job.error = { code: error.code || 'OPERATION_FAILED', message: error.message, details: error.details };
      } finally { job.finishedAt = new Date().toISOString(); }
    });
    return this.public(job);
  }
  get(id) { const j = this.items.get(id); if (!j) throw new ApiError(404, 'JOB_NOT_FOUND', '任务不存在'); return j; }
  public(job) { const { controller, done, ...safe } = job; return safe; }
  cancel(id) { const j = this.get(id); if (['queued', 'running'].includes(j.status)) j.controller.abort(new Error('任务已取消')); return this.public(j); }
  async cancelSession(id) { const jobs = [...this.items.values()].filter(j => j.sessionId === id); for (const j of jobs) this.cancel(j.id); await Promise.all(jobs.map(j => j.done)); }
  async close() { for (const j of this.items.values()) this.cancel(j.id); await Promise.all([...this.items.values()].map(j => j.done)); }
}
