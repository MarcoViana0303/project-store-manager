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
    it('Testando a rota /products com findAll', async function () {
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
      const req = { params: { id: 150000 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Arrange
      sinon.stub(productsServices, 'findProductById').resolves({
        type: 'PRODUCT_NOT_FOUND',
        message: 'Product not found',
      });
      // Act
      await productsControllers.findProductById(req, res);
      // Assert
      expect(res.status).calledWith(404);
      expect(res.json).calledWith(productsMock.errReturn);
    })

    it('Testando a rota /products/:id caso encontre o id', async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, 'findProductById').resolves({
        type: null,
        message: productsMock.productById,
      });

      await productsControllers.findProductById(req, res);

      expect(res.json).calledWith(productsMock.productById);
      expect(res.status).calledWith(200);
    });

    it('Criando produto com sucesso', async function () {
      const req = { body: { name: 'panco' } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, 'createProduct').resolves({
        type: null,
        message: {
          id: 1,
          name: 'Martelo de Thor',
        },
      });

      await productsControllers.createProduct(req, res);

      expect(res.status).calledWith(201);
      expect(res.json).calledWith(productsMock.productById);
    });

    it('Criando produto com fracasso', async function () {
      const req = { body: { name: 'pan' } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, 'createProduct').resolves({
        type: 'INVALID_VALUE',
        message: '"name" length must be at least 5 characters long',
      });

      await productsControllers.createProduct(req, res);

      expect(res.status).calledWith(422);
      expect(res.json).calledWith({ message: '"name" length must be at least 5 characters long' });
    });
  });

  afterEach(sinon.restore);
});