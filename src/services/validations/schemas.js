const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const createNewProduct = Joi.object({
  name: Joi.string().min(5).required().label('name'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long'
});

module.exports = {
  idSchema,
  createNewProduct,
}