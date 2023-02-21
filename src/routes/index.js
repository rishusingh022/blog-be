const { pingRoutes } = require('./ping');
const { blogPostRoutes } = require('./blogPost');

module.exports = [
  ...pingRoutes,
  ...blogPostRoutes,
];
