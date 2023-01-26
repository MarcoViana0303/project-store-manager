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
      sinon.stub(connection, 'execute').resolves([salesMock.salesMock]);
      // Act 
      const result = await salesModels.findAllSales();
      // Assert
      expect(result).to.be.deep.equal([salesMock.salesMock]);
    });

    it('Listando um sale específico', async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[salesMock.salesMock[2]]]);
      // Act
      const result = await salesModels.findSaleById(3);
      // Assert
      expect(result).to.be.deep.equal(salesMock.salesMock[2]);
    });

  });

  afterEach(sinon.restore);
});
