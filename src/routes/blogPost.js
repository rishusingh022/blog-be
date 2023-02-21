const { getBlogPosts } = require('../handlers/blogPost');

const getBlogPostsRoute = {
  method: 'GET',
  path: '/blog-posts',
  handler: getBlogPosts,
};

module.exports = {
  blogPostRoutes: [
    getBlogPostsRoute,
  ],
  getBlogPostsRoute,
};
