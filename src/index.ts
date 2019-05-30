import bot from 'app';
import config from 'config';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
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

  const getPhrase = event => {
    const eventsMap = {
      'members:pledge:create': 'будет платить',
      'members:pledge:update': 'теперь будет платить',
      'members:create': 'теперь точно платит'
    };

    return eventsMap[event];
  };

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
      const name = getPhrase(req.get('x-patreon-event'));

      if (!name) {
        res.sendStatus(200);
        return;
      }

      const {
        amount_cents,
        full_name,
        will_pay_amount_cents
      } = req.body.data.attributes;

      const cents = amount_cents || will_pay_amount_cents;
      const amount = `${cents / 100.0}$`;

      bot.telegram.sendMessage(
        config.telegram.chat,
        `#патрон ${amount}${name}${full_name}`,
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
