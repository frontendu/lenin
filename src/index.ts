import bot from 'app';
import config from 'config';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

if (process.env.NODE_ENV === 'production') {
  const app = express();
  const path = `/${randomBytes(16).toString('hex')}`;

  app.use(bot.webhookCallback(path));
  app.use(bodyParser.json());

  const {
    port,
    domain
    // @ts-ignore
  } = config.telegram.launch.webhook;

  bot.telegram.setWebhook(`${domain}${path}`);

  app.get('/', (req: Request, res: Response) => {
    res.send('Yo, yo, yo!');
  });

  app.get('/patreon', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  });

  app.listen(port);
} else {
  // @ts-ignore
  bot.launch(config.telegram.launch);
}
