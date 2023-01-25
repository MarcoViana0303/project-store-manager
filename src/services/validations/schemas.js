const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const createNewProduct = Joi.string().min(5).required();

const createNewSale = Joi.object({
  productId: idSchema.label('productId'),
  quantity: Joi.number().min(1).integer()
    .required()
    .label('quantity'),
})
  .messages({ 'any.min': '{{#label}} must be greater than or equal to {{#limit}}' });

const addSales = Joi.array().items(createNewSale);

module.exports = {
  idSchema,
  createNewProduct,
  createNewSale,
  addSales,
};

// .positive()