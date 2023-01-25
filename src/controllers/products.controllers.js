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
    return res.status(errorMap.mapError(type)).json({ message });
  }

   res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productServices.createProduct(name);

  if (type) {
    return res.status(422).json({ message });
  }
  return res.status(201).json(message);
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
};