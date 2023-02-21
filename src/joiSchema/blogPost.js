const Joi = require('joi');

const blogPostIdParam = Joi.object({
  id: Joi.string().required(),
});
const updateBlogPostPayload = Joi.object({
  liked: Joi.boolean(),
  claps: Joi.number(),
});

module.exports = {
  blogPostIdParam,
  updateBlogPostPayload,
};
