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

  const {
    port,
    domain
    // @ts-ignore
  } = config.telegram.launch.webhook;

  bot.telegram.setWebhook(`${domain}${path}`);

  app.get('/', (req: Request, res: Response) => {
    res.send('Yo, yo, yo!');
  });

  app.post(
    '/patreon',
    bodyParser.json({
      verify: (req: Request, res: Response, buf: Buffer) => {
        const secret = createHmac('md5', config.patreon.secret)
          .update(buf)
          .digest('hex');
        const rSecret = req.get('x-patreon-signature');

        if (secret !== rSecret) {
          throw new Error('Invalid token');
        }
      }
    }),
    async (req, res, next) => {
      const body = await got(req.body.releationships.reward.links.related);
      console.log(require('util').inspect(body));
      res.sendStatus(200);
    }
  );

  app.listen(port);
} else {
  // @ts-ignore
  bot.launch(config.telegram.launch);
}
