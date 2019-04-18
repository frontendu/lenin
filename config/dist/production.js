"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = require("crypto");

var _default = {
  telegram: {
    mode: 'webhook',
    webhook: {
      host: process.env.TG_API_HOST,
      port: process.env.PORT,
      hookPath: `/${(0, _crypto.randomBytes)(16).toString('hex')}`
    }
  }
};
exports.default = _default;
//# sourceMappingURL=production.js.map