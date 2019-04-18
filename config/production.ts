import { Config } from 'config';
import { randomBytes } from 'crypto';

module.exports = {
  telegram: {
    launch: {
      webhook: {
        domain: process.env.TG_API_DOMAIN
      }
    }
  }
} as Config;
