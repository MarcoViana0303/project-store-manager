const saleModels = require('../models/sales.models');

const findAllSales = async () => {
  const result = await saleModels.findAllSales();
  return { type: null, message: result };
}

const findSaleById = async (id) => {
  const result = await saleModels.findSaleById(id);

  if (!result) {
    return { type: 404, message: "Sale not found" };
  }
  return { type: null, message: result }
};

module.exports = {
  findAllSales,
  findSaleById,
}