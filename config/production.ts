import { Config } from 'config';
import { randomBytes } from 'crypto';

module.exports = {
  telegram: {
    launch: {
      webhook: {
        host: process.env.TG_API_HOST,
        port: process.env.PORT,
        hookPath: `/${randomBytes(16).toString('hex')}`
      }
    }
  }
} as Config;
