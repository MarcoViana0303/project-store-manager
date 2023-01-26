const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { returnGetById, returnSales} = require('./mocks/salesControllers.mock');
const salesControllers = require('../../../src/controllers/sales.controllers');
chai.use(sinonChai);
const salesServices = require('../../../src/services/sales.services');
const { expect } = require('chai');

describe('Testando a camada controllers', function () {
  describe('Testes para o requisito 2', function () {
    it('Testando a rota /sales com findAll', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Arrange
      sinon.stub(salesServices, 'findAllSales').resolves({
        type: null,
        message: returnSales,
      });
      // Act
      await salesControllers.findAllSales(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.been.calledWith(returnSales);
    });

    it('Testando a rota /products/:id caso não encontre o id', async function () {
      const req = { params: { id: 150000 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Arrange
      sinon.stub(salesServices, 'findSaleById').resolves({
        type: 404,
        message: 'Sale not found',
      });
      // Act
      await salesControllers.findSaleById(req, res);
      // Assert
      expect(res.status).calledWith(404);
      expect(res.json).calledWith({ message: 'Sale not found' });
    })

    it('Testando a rota /products/:id caso encontre o id', async function () {
      const req = { params: { id: 1 } };
      const res = {};
      // Arrange
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act
      sinon.stub(salesServices, 'findSaleById').resolves({
        type: null,
        message: 
     [
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
        ],
      });

      await salesControllers.findSaleById(req, res);
      // Assert
      expect(res.json).calledWith([
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
      expect(res.status).calledWith(200);
    });

  });

  afterEach(sinon.restore);
});