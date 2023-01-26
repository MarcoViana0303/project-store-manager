const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { returnGetById, salesById, returnSales } = require('./mocks/salesServices.mock');
const salesModels = require('../../../src/models/sales.models');
const salesServices = require('../../../src/services/sales.services');
const { expect } = require('chai');

describe('Testando a camada services', function () {

  it('Testando a rota /sales', async function () {
    // Arrange
    sinon.stub(salesModels, 'findAllSales').resolves(returnSales);
    // Act
    const result = await salesServices.findAllSales();
    // Assert
    expect(result).to.be.deep.equal({
      type: null,
      message: returnSales,
    });


  });

  it('Retornando false caso a rota /sales/:id não encontrar o id', async function () {
    const falseNumber = 'numero';
    // Arrange
    sinon.stub(salesModels, 'findSaleById').resolves(undefined);
    // Act
    const result = await salesServices.findSaleById(falseNumber);
    // Assert
    expect(result.type).to.be.deep.equal(404);
    expect(result.message).to.equal('Sale not found');

  });

  it('Retornando true caso a rota /products/:id encontrar o id', async function () {
    // Arrange
    sinon.stub(salesModels, 'findSaleById').resolves(salesById);
    // Act
    const result = await salesServices.findSaleById(1);
    // Assert
    expect(result).to.deep.equal(returnGetById);

  });
  // Faltando ajustar
  // it('Criando produto com sucesso', async function () {

  //   sinon.stub(productsModels, 'insert').resolves(1);

  //   sinon.stub(productsModels, 'findProductById').resolves(productById);

  //   const result = await productsServices.createProduct({ name: 'panco' });



  //   expect(result).to.deep.equal({
  //     type: null,
  //     message: productById,
  //   });

  // });

  // Faltando ajustar
  // it('Criando produto com fracasso', async function () {


  //   sinon.stub(productsModels, 'insert').resolves(1);
  //   sinon.stub(productsModels, 'findProductById').resolves(productById);

  //   sinon.stub(validateInput, 'validateName').resolves({
  //     type: 422,
  //     message: '"name" length must be at least 5 characters long',
  //   })

  //   const result = await productsServices.createProduct({ name: 'pan' });


  //   // expect(res.status).calledWith(422);
  //   expect(result).to.deep.equal({ type: 422, message: '"name" length must be at least 5 characters long' });
  // });


  afterEach(sinon.restore);

});
