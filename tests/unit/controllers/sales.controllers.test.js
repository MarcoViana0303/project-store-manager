const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesMock = require('./mocks/salesControllers.mock');
const salesControllers = require('../../../src/controllers/sales.controllers');
chai.use(sinonChai);
const salesServices = require('../../../src/services/sales.services');
const { expect } = require('chai');

describe('Testando a camada controllers', function () {
 
    it('Testando a rota /sales', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Arrange
      sinon.stub(salesServices, 'findAllSales').resolves(salesMock.salesMock);
      // Act
      await salesControllers.findAllSales(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.been.calledWith(salesMock.salesMock);
    });

    // it('Testando a rota /products/:id caso não encontre o id', async function () {
    //   const req = { params: { id: 15 } };
    //   const res = {};

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();
    //   // Arrange
    //   sinon.stub(productsServices, 'findProductById').resolves(false);
    //   // Act
    //   await productsControllers.findProductById(req, res);
    //   // Assert
    //   expect(res.status).to.been.calledWith(404);
    //   expect(res.json).to.been.calledWithExactly({ message: 'Product not found' });
    // })
  afterEach(sinon.restore);
});