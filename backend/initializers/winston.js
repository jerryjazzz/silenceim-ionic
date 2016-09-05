const winston = require('winston');

module.exports = function(app) {

  'use strict';

  const logger = new (winston.Logger)({
    level: 'info', // TODO set log level for production
    exitOnError: false,
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'log/app.log' })
    ]
  });

  app.set('logger', logger);

};
