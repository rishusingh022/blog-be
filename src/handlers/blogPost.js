const models = require('../../models');

const getBlogPosts = async (request, h) => {
  const blogPosts = await models.blogPosts.findAll({
    attributes: ['id', 'date', 'reading_time', 'title', 'description', 'claps', 'liked', 'image'],
  });
  return h.response(blogPosts);
};

module.exports = {
  getBlogPosts,
};
