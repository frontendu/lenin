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
import {handleThumb} from 'app/thumb';
import { inspect } from 'util';


const stage = new Stage();
const bot = new Telegraf(config.telegram.token)
  .use(session())
  .use((ctx, next) => {console.log(inspect(ctx.update)); next()})
  .use(stage.middleware())
  .use(Composer.branch(isForward, askTheme, Composer.passThru()))
  .use(Composer.branch(noQueryFilter, clearAsk, Composer.passThru()))
  .use(Composer.branch(yesQueryFilter, addTheme, Composer.passThru()));

handleManual(bot, stage);
handleThumb(bot, stage);

export default bot;
