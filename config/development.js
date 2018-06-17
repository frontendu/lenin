'use strict';

const { Agent: SocksProxyAgent } = require('socks5-agent');

module.exports = {
  telegram: {
    options: {
      telegram: {
        agent: new SocksProxyAgent({
          isHttps: true,
          socksHost: process.env.SOCKS_HOST,
          socksPort: process.env.SOCKS_PORT,
          socksUsername: process.env.SOCKS_USERNAME,
          socksPassword: process.env.SOCKS_PASSWORD
        })
      }
    },
    mode: 'polling'
  }
};