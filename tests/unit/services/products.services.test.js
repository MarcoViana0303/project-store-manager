const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productsMock = require('./mocks/productsServices.mock');
const productsModels = require('../../../src/models/products.models');
const productsServices = require('../../../src/services/products.services');
const { expect } = require('chai');

chai.use(sinonChai);

describe('Testando a camada services', function () {
  describe('Testes para o requisito 2', function () {
   
   
    it('Testando a rota /products', async function () {
     // Arrange
      sinon.stub(productsModels, 'findAllProducts').resolves(productsMock.productsMock);
     // Act
      const result = await productsServices.findAllProducts();
     // Assert
      expect(result).to.be.deep.equal(productsMock.productsMock);
    });

  });
  describe('Testando a rota /products/:id', function () {
    it('Retornando false caso a rota /products/:id não encontrar o id', async function () {
      const productId = 1;
      // Arrange
      sinon.stub(productsModels, 'findProductById').resolves(undefined);
      // Act
      const result = await productsServices.findProductById(productId);
      // Assert
      expect(result).to.be.false;
    
    });

    it('Retornando true caso a rota /products/:id encontrar o id', async function () {
      const productId = 1;
      // Arrange
      sinon.stub(productsModels, 'findProductById').resolves(productsMock.productById);
      // Act
      const result = await productsServices.findProductById(1);
      // Assert
      expect(result).to.have.been.calledWithExactly(productsMock.productById);

    });
    
  });
  afterEach(sinon.restore);
})
