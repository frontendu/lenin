import config from 'config';
import Telegraf, { Composer } from 'telegraf';
import Stage from 'telegraf/stage';
import session from 'telegraf/session';
import { isForward } from 'filters';
import {
  askTheme,
  yesQueryFilter,
  noQueryFilter,
  clearAsk,
  addTheme,
  handleManual
} from 'app/theme';

const stage = new Stage();
const bot = new Telegraf(config.telegram.token)
  .use(session())
  .use(stage.middleware())
  .use((ctx, next) => {
    console.log(ctx.chat.id);
    next();
  })
  .use(Composer.branch(isForward, askTheme, Composer.passThru()))
  .use(Composer.branch(noQueryFilter, clearAsk, Composer.passThru()))
  .use(Composer.branch(yesQueryFilter, addTheme, Composer.passThru()));

handleManual(bot, stage);

export default bot;
