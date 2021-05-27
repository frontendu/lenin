import config from 'config';
import { Scenes, Telegraf, Composer, session } from 'telegraf';
import { isForward } from 'filters';
import {
  askTheme,
  yesQueryFilter,
  noQueryFilter,
  clearAsk,
  addTheme,
  handleManual
} from 'app/theme';

const stage = new Scenes.Stage();
const bot = new Telegraf(config.telegram.token)
  .use(session())
  .use(stage.middleware())
  .use(Composer.branch(isForward, askTheme, Composer.passThru()))
  .use(Composer.branch(noQueryFilter, clearAsk, Composer.passThru()))
  .use(Composer.branch(yesQueryFilter, addTheme, Composer.passThru()));

handleManual(bot, stage);

export default bot;
