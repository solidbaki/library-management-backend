const Joi = require('joi');

const getUserByIdSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});

module.exports = { getUserByIdSchema };
