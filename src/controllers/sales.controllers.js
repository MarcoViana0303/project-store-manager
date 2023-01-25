const saleServices = require('../services/sales.services');

const findAllSales = async (_req, res) => {
  const { message } = await saleServices.findAllSales();

  res.status(200).json(message);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await saleServices.findSaleById(id);

  if (type) {
    return res.status(404).json({ message });
  }

   res.status(200).json(message);
};

module.exports = {
  findAllSales,
  findSaleById,
};