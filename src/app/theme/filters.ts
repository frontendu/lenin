import { ThemeAnswer } from 'app/theme/types';

export const yesQueryFilter = (ctx: any) =>
  ctx.callbackQuery && ctx.callbackQuery.data === ThemeAnswer.YES;

export const noQueryFilter = (ctx: any) =>
  ctx.callbackQuery && ctx.callbackQuery.data === ThemeAnswer.NO;
