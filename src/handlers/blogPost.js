const Boom = require('@hapi/boom');
const models = require('../../models');
const { BLOG_POST_NOT_FOUND_ERROR } = require('../constants/errors');

const getBlogPosts = async (request, h) => {
  const blogPosts = await models.blogPosts.findAll({
    attributes: ['id', 'date', 'reading_time', 'title', 'description', 'claps', 'liked', 'image'],
  });
  return h.response(blogPosts);
};

const updateBlogPostById = async (request, h) => {
  const { id: blogPostId } = request.params;
  const blogPost = await models.blogPosts.findByPk(blogPostId);
  if (!blogPost) {
    throw Boom.badRequest(BLOG_POST_NOT_FOUND_ERROR);
  }

  await models.blogPosts.update(request.payload, { where: { id: blogPostId } });

  return h.response({
    data: request.payload,
  });
};

module.exports = {
  getBlogPosts,
  updateBlogPostById,
};
