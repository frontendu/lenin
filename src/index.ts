import bot from 'app';
import config from 'config';
import express, { Request, Response } from 'express';
import { randomBytes } from 'crypto';

if (process.env.NODE_ENV === 'production') {
  const app = express();
  const path = `/${randomBytes(16).toString('hex')}`;

  app.use(bot.webhookCallback(path));

  const {
    host,
    port
    // @ts-ignore
  } = config.telegram.launch.webhook;

  bot.telegram.setWebhook(`${host}:${port}${path}`);
  console.log(`Bot bind to ${host}:${port}${path}`);

  app.get('/', (req: Request, res: Response) => {
    res.send('Yo, yo, yo!');
  });

  app.listen(port);
} else {
  // @ts-ignore
  bot.launch(config.telegram.launch);
}
