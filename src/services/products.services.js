const productModels = require('../models/products.models');

const findAllProducts = async () => {
  const result = await productModels.findAllProducts();
  console.log(result);
  return result;
}

const findProductById = async (id) => {
  const result = await productModels.findProductById(id);

  if (!result) {
    return { type: 404, message: "Product not found" };
  }
  return { type: null, data: result}
};

module.exports = {
  findAllProducts,
  findProductById,
}