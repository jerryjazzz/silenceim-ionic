require('dotenv').config();

module.exports = function (shipit) {

  const DEPLOY_USER = process.env.DEPLOY_USER;

  require('shipit-deploy')(shipit);
  require('shipit-shared')(shipit);
  require('shipit-bower')(shipit);
  require('shipit-npm')(shipit); // shipit production npm:init npm:install

  shipit.initConfig({
    default: {
      workspace: 'tmp/git',
      deployTo: `/home/${DEPLOY_USER}/www/`,
      repositoryUrl: 'git@github.com:jesus-hear-you/silenceim-ionic.git',
      branch: 'master',
      ignores: ['.git', 'node_modules/*', 'tmp/*'],
      keepReleases: 5,
      deleteOnRollback: false,
      shared: {
        overwrite: true,
        dirs: ['node_modules', 'config'],
      },
      bower: {
        remote: false,
        installFlags: ['--save'],
      },
      //TODO fix this is not working
      npm: {
        installArgs: ['--production']
        // triggerEvent: 'shared:end'
      }
    },
    production: {
      servers: `${DEPLOY_USER}@silenceim.com`
    }
  });

  shipit.on('published', function() {
    shipit.remote('pm2 restart app');
  });
};
