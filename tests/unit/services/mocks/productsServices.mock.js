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

module.exports = {
  productsMock,
  productById,
  returnGetById,
};
