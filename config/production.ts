import { Config } from 'config';
import { randomBytes } from 'crypto';

module.exports = {
  telegram: {
    launch: {
      webhook: {
        host: process.env.TG_API_HOST,
        port: process.env.PORT
      }
    }
  }
} as Config;
