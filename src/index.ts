import bot from 'app';
import config from 'config';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import got from 'got';
import { randomBytes, createHmac } from 'crypto';

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

  app.post('/patreon', async (req, res, next) => {
    const secret = createHmac('md5', config.patreon.secret)
      .update(JSON.stringify(req.body))
      .digest('hex');
    const rSecret = req.get('x-patreon-signature');

    if (secret !== rSecret) {
      console.error(`Invalid token ${secret}!`);
      next(new Error('Invalid token'));
      return;
    }

    console.log(require('util').inspect(req.body));
    res.sendStatus(200);
  });

  app.listen(port);
} else {
  // @ts-ignore
  bot.launch(config.telegram.launch);
}
