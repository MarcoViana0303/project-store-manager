const schemas = require('./schemas');

const validationNewProduct = (name) => {
  const { error } = schemas.createNewProduct.validate({ name });

  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  };
  return { type: null, message: '' };
}

module.exports = {
  validationNewProduct,
}