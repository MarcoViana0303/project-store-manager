const productModels = require('../models/products.models');

const findAllProducts = async () => {
  const result = await productModels.findAllProducts();
  console.log(result);
  return result;
}

const findProductById = async (id) => {
  const result = await productModels.findProductById(id);

  if (!result) {
    return { type: 'PRODUCT_NOT_FOUND', message: "Product not found" };
  }
  return { type: null, message: result}
};

module.exports = {
  findAllProducts,
  findProductById,
}