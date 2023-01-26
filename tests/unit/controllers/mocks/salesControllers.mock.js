const salesMock = [
  {
    "saleId": 1,
    "date": "2023-01-25T23:24:22.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-01-25T23:24:22.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const salesById = {
  "saleId": 1,
  "date": "2023-01-25T23:24:22.000Z",
  "productId": 2,
  "quantity": 10
};

const returnGetById = {
  type: null,
  message: salesById,
};

const returnSales = {
  id: 2,
  itemsSold: [
    {
      productId: 3,
      quantity: 15,
    },
  ],
};

module.exports = {
  salesMock,
  salesById,
  returnGetById,
  returnSales,
};
