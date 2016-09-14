const utils = require('shipit-utils');

require('dotenv').config();

module.exports = function (shipit) {

  const DEPLOY_USER = process.env.DEPLOY_USER;

  require('shipit-deploy')(shipit);
  require('shipit-shared')(shipit);
  require('shipit-bower')(shipit);
  require('shipit-npm')(shipit); // shipit production npm:init npm:install

  /**
   * Digest your assets replaces all `${digest}` text-pattern with timestamp
   * inside *index.html*
   */
  shipit.blTask('digest', function() {
    const fs = require('fs');
    const filePath = shipit.config.workspace + '/www/index.html';
    const digest = new Date()/1;

    return new Promise(function(resolve) {
      fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) throw err;

        fs.writeFile(filePath, data.replace(/digest=\d*/g, "digest=" + digest), 'utf8', function(err) {
          if(err) throw err;

          shipit.log(`DIGEST DONE ${filePath}`);
          resolve();
        });
      });
    });
  });

  shipit.initConfig({
    default: {
      workspace: 'tmp/git',
      deployTo: `/home/${DEPLOY_USER}/www/`,
      repositoryUrl: 'git@github.com:jesus-hear-you/silenceim-ionic.git',
      branch: 'master',
      ignores: ['.git', 'node_modules/*', 'tmp/*'],
      keepReleases: 5,
      deleteOnRollback: false,
      bower: {
        remote: false,
        installFlags: ['--save'],
      },
      npm: {
        remote: true,
        installArgs: ['--production'],
        triggerEvent: 'sharedEnd'
      },
      shared: {
        overwrite: true,
        files: ['.env'],
        dirs: ['node_modules', 'config', 'log'],
      }
    },
    production: {
      servers: `${DEPLOY_USER}@silenceim.com`
    }
  });

  shipit.on('fetched', function restart() {
    shipit.start('digest');
  });

  shipit.on('published', function restart() {
    shipit.remote('pm2 restart app');
  });
};
