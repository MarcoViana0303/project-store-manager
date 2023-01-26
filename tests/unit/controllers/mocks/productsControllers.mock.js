const productsMock = [
  {
    "id": 1,
    "name": 'Martelo de Thor',
  },
  {
    "id": 2,
    "name": 'Traje de encolhimento',
  },
  {
    "id": 3,
    "name": 'Escudo do Capitão América',
  },
];

const productById = {
  id: 1,
  name: 'Martelo de Thor',
};

const returnGetById = {
  type: null,
  message: productById,
};

const  productNotFound = {
  type: 'PRODUCT_NOT_FOUND',
  message: 'Product not found',
};

const errReturn = { message: productNotFound.message };

module.exports = {
  productsMock,
  productById,
  errReturn,
  returnGetById,
  productNotFound,
}