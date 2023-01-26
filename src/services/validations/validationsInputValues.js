const schemas = require('./schemas');
// const productModel = require('../../models/products.models');

// const idValidate = (id) => {
//   const result = schemas.idSchema.validate(id);

//   // if (error) {
//   //   return {
//   //     type: 'INVALID_VALUE', message: '"id" must be a number',
//   //   };
//   // }
//   return { type: null, message: '' };
// };

const validationNewProduct = (name) => {
  const { error } = schemas.createNewProduct.validate(name);

  if (error) {
    return {
      type: 'INVALID_VALUE', message: '"name" length must be at least 5 characters long',
    };
  }
  return { type: null, message: '' };
};

// const validationNewSale = async (sales) => {
//   const { error } = await schemas.addSales.validate(sales);

//   if (error) {
//     return { type: 'INVALID_VALUE', message: error.message };
//   }

//   const sale = await Promise.all(sales.map(async ({ productId }) => {
//     return productModel.findProductById(productId)
//   }));

//   const salesDoesNotExist = sale.some((salesProd) => salesProd === undefined);

//   if (salesDoesNotExist) {
//     return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
//   }

//   return { type: null, message: '' };
// };

module.exports = {
  validationNewProduct,
};