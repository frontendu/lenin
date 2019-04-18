import { ContextMessageUpdate } from 'telegraf';
import { ThemeAnswer } from 'app/theme/types';

export const yesQueryFilter = (ctx: ContextMessageUpdate) =>
  ctx.callbackQuery && ctx.callbackQuery.data === ThemeAnswer.YES;

export const noQueryFilter = (ctx: ContextMessageUpdate) =>
  ctx.callbackQuery && ctx.callbackQuery.data === ThemeAnswer.NO;
