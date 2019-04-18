import { Config } from 'config';

module.exports = {
  telegram: {
    launch: {
      polling: {
        timeout: 30,
        limit: 100
      }
    }
  }
} as Config;
