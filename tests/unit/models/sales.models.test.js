const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const connection = require('../../../src/models/connection');
const salesModels = require('../../../src/models/sales.models');

const salesMock = require('./mocks/salesModels.mock');

describe('Testando a camada model da Sales', function () {
  describe('Testes para o requisito 2', function () {

    it('Listando todos os sales', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[
        {
          sale_id: 1,
          date: '2023-01-14T12:25:35.000Z',
          product_id: 1,
          quantity: 5,
        },
        {
          sale_id: 1,
          date: '2023-01-14T12:25:35.000Z',
          product_id: 2,
          quantity: 10,
        },
      ]]);
      // Act 
      const result = await salesModels.findAllSales();
      // Assert
      expect(result).to.be.deep.equal([
        {
          saleId: 1,
          date: '2023-01-14T12:25:35.000Z',
          productId: 1,
          quantity: 5,
        },
        {
          saleId: 1,
          date: '2023-01-14T12:25:35.000Z',
          productId: 2,
          quantity: 10,
        },
      ]);
    });

    it('Listando um sale específico', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[
        {
          sale_id: 1,
          date: '2023-01-14T12:25:35.000Z',
          product_id: 1,
          quantity: 5,
        },
        {
          sale_id: 1,
          date: '2023-01-14T12:25:35.000Z',
          product_id: 2,
          quantity: 10,
        },
      ]]);
      // Act
      const result = await salesModels.findSaleById(1);
      // Assert
      expect(result).to.deep.equal([
        {
          date: '2023-01-14T12:25:35.000Z',
          productId: 1,
          quantity: 5,
        },
        {
          date: '2023-01-14T12:25:35.000Z',
          productId: 2,
          quantity: 10,
        },
      ]);
    });

  });

  afterEach(sinon.restore);
});
