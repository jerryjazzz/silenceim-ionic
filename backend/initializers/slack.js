const slack = require('slack-notify');

module.exports = function(app) {

  'use strict';

  app.set('slack', slack(process.env.SLACK_WEBHOOK_URL));

};
