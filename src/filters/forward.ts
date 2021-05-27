export const isForward = (ctx: any) => {
  const text = ctx.message && (ctx.message.text || ctx.message.caption);
  const includeLinks =
    text && (text.includes('http://') || text.includes('https://'));
  const forwardFromChat =
    ctx.message && typeof ctx.message.forward_from_chat === 'object';

  return includeLinks || forwardFromChat;
};
