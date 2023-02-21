const Ping = require('../handlers/ping');

const getPongRoute = {
  method: 'GET',
  path: '/ping',
  handler: Ping.getPong
};

module.exports = {
  pingRoutes: [
    getPongRoute
  ],
  getPongRoute
};
