export const isForward = ctx =>
  ctx.message && typeof ctx.message.forward_from_chat === 'object';
