const productServices = require('../services/products.services');

const errorMap = require('../utils/errorMap');

const findAllProducts = async (_req, res) => {
  const result = await productServices.findAllProducts();

  console.log(result);
  return res.status(200).json(result);
};

const findProductById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productServices.findProductById(id);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message })
  }

   res.status(200).json(message);
};

module.exports = {
  findAllProducts,
  findProductById,
};