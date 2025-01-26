const Joi = require('joi');

const borrowBookSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  bookId: Joi.number().integer().positive().required(),
});

const returnBookSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  score: Joi.number().integer().min(0).max(5).optional(),
});

module.exports = { borrowBookSchema, returnBookSchema };
