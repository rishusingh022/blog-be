const Hapi = require('@hapi/hapi');
const Pino = require('hapi-pino');
const Routes = require('./routes');

process.on('unhandledRejection', (err) => {
  console.error(err);
});

const attachPlugins = async (server) => {
  await server.register({
    plugin: Pino,
    options: {
      enabled: process.env.NODE_ENV !== 'test'
    },
  });
};

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });
  await server.initialize();
  await attachPlugins(server);
  server.route(Routes);
  return server;
};

const start = async () => {
  const server = await init();
  await server.start();
};

module.exports = { init, start };
