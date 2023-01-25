const productModels = require('../models/products.models');
// const Joi = require('joi');
const schemaName = require('./validations/validationsInputValues');

const findAllProducts = async () => {
  const result = await productModels.findAllProducts();
  console.log(result);
  return result;
};

const findProductById = async (id) => {
  const result = await productModels.findProductById(id);

  if (!result) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: result };
};

const createProduct = async (name) => {
  const error = schemaName.validationNewProduct(name);
  if (error.type) {
    return error;
  }

  const newProduct = await productModels.insert(name);
  
  // const product = await productModels.findProductById(newProduct);
  if (newProduct) {
    return { type: null, message: newProduct };
  }
  return { type: 'INVALID_VALUE', message: '"name" length must be at least 5 characters long' };
};

const updateProduct = async (name, id) => {
  const error = schemaName.validationNewProduct(name);
  if (error.type) {
    return error;
  }
  const updateById = await productModels.findProductById(id);
  if (!updateById) {
    return { type: 404, message: 'Product not found' };
  }
  await productModels.update(name, id);

  return { type: null, message: { id, name } };
};

const deleteById = async ({ id }) => { 
  const product = await productModels.deleted({ id });

  if (product.affectedRows === 0) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: '' };
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteById,
};