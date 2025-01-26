const Joi = require('joi');

const getBookByIdSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});

module.exports = { getBookByIdSchema };
