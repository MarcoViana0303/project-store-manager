const productServices = require('../services/products.services');

const findAllProducts = async (_req, res) => {
  const result = await productServices.findAllProducts();

  console.log(result);
  return res.status(200).json(result);
};

const findProductById = async (req, res) => {
  const { id } = req.params;

  const { type, message, data } = await productServices.findProductById(id);

  if (type) {
    return res.status(type).json(message)
  }

  return res.status(200).json(data);
};

module.exports = {
  findAllProducts,
  findProductById,
};