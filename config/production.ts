import { Config } from 'config';
import { randomBytes } from 'crypto';

module.exports = {
  telegram: {
    launch: {
      webhook: {
        port: process.env.PORT,
        host: process.env.HOST,
        domain: process.env.TG_API_DOMAIN
      }
    }
  }
} as Config;
