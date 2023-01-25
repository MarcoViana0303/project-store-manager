const findSaleById = async (id) => {
  const result = await productModels.findProductById(id);

  if (!result) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: result };
};

const createSale = async (date) => {
  const newSale = await productModels.insertSale(date);

  const sale = await productModels.findSaleById(newSale);
  if (sale) {
    return { type: null, message: sale };
  }
};