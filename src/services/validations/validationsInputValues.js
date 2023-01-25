const schemas = require('./schemas');

const idValidate = (id) => {
  const { error } = schemas.idSchema.validate(id);

  if (error) {
    return {
      type: 'INVALID_VALUE', message: '"id" must be a number'
    };
  };
  return { type: null, message: '' };
};

const validationNewProduct = (name) => {
  const { error } = schemas.createNewProduct.validate(name);

  if (error) {
    return {
      type: 'INVALID_VALUE', message: "\"name\" length must be at least 5 characters long"
    };
  };
  return { type: null, message: '' };
};

module.exports = {
  validationNewProduct,
  idValidate,
}