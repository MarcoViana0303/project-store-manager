const { expect } = require('chai');
const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// chai.use(sinonChai);

const connection = require('../../../src/models/connection');
const productModels = require('../../../src/models/products.models');

const productsMock = require('./mocks/productsModels.mock');

describe('Implementando testes para /products e /products/:id', function () {
  describe('Testes para o requisito 2', function () {
    it('Listando todos os produtos', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([productsMock.productsMock]);
      // Act 
      const result = await productModels.findAllProducts();
      // Assert
      expect(result).to.be.deep.equal(productsMock.productsMock);
    });

    it('Listando um produto específico', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[productsMock.productsMock[2]]]);
      // Act
      const result = await productModels.findProductById(3);
      // Assert
      expect(result).to.be.deep.equal(productsMock.productsMock[2]);
    });
    
  });

  afterEach(sinon.restore);
  
});
