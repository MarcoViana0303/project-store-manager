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
];

const salesMockId = [
  {
    "date": "2023-01-25T23:24:22.000Z",
    "productId": 2,
    "quantity": 10
  }
];

const createSale = [
  {
    productId: 1,
    quantity: 5,
  },
];

module.exports = {
  salesMock,
  salesMockId,
  createSale,
}