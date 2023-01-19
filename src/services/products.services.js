const productModels = require('../models/products.models');
/* const schema = require('./validations/validationsInputValues'); */
const schemas = require('../services/validations/schemas');


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

const createProduct = async (body) => {
  const idProduct = await productModels.insert(body);
  
  const product = await productModels.findProductById(idProduct);
  return { type: null, message: product };

  /* const newProductId = await productModels.insert({ name });
  const newProduct = await productModels.findProductById(newProductId); */

//  return { type: null, message: newProduct };
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
};