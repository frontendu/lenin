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
      const trigger = req.get('x-patreon-event');

      if (trigger !== 'members:pledge:create') {
        res.sendStatus(200);
      }

      const amount = `${req.body.data.attributes.pledge_amount_cents / 100.0}$`;
      const response = await got(
        req.body.data.relationships.user.links.related,
        {
          json: true
        }
      );

      const { full_name, url } = response.body.data.attributes;

      bot.telegram.sendMessage(
        config.telegram.chat,
        `${amount} from [${full_name}](${url})`,
        {
          parse_mode: 'Markdown'
        }
      );

      res.sendStatus(200);
    }
  );

  app.listen(port);
} else {
  // @ts-ignore
  bot.launch(config.telegram.launch);
}
