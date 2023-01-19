const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsMock = require('./mocks/productsControllers.mock');
const productsControllers = require('../../../src/controllers/products.controllers');
chai.use(sinonChai);
const productsServices = require('../../../src/services/products.services');
const { expect } = require('chai');

describe('Testando a camada controllers', function () {
  describe('Testes para o requisito 2', function () {

    it('Testando a rota /products', async function () {
      const req = {};
      const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
      // Arrange
      sinon.stub(productsServices, 'findAllProducts').resolves(productsMock.productsMock);
      // Act
      await productsControllers.findAllProducts(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.been.calledWithExactly(productsMock.productsMock);
    });
    
    it('Testando a rota /products/:id caso não encontre o id', async function () {
      const req = { params: { id: 15 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Arrange
      sinon.stub(productsServices, 'findProductById').resolves(false);
      // Act
      await productsControllers.findProductById(req, res);
      // Assert
      expect(res.status).to.been.calledWith(404);
      expect(res.json).to.been.calledWithExactly({ message: 'Product not found' });
    })
  });
  afterEach(sinon.restore);
});