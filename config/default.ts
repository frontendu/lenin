import { Config } from 'config';

module.exports = {
  telegram: {
    token: process.env.TG_API_TOKEN
  },
  trello: {
    key: process.env.TRELLO_KEY,
    token: process.env.TRELLO_TOKEN,
    themesList: process.env.TRELLO_THEMES_LIST
  }
} as Config;
