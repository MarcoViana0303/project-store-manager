const sinon = require('sinon');
const validateInput = require('../../../src/middlewares/nameValidate')
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { productsMock, returnGetById, productById } = require('./mocks/productsServices.mock');
const productsModels = require('../../../src/models/products.models');
const productsServices = require('../../../src/services/products.services');
const { expect } = require('chai');

describe('Testando a camada services', function () {

  it('Testando a rota /products', async function () {
    // Arrange
    sinon.stub(productsModels, 'findAllProducts').resolves(productsMock);
    // Act
    const result = await productsServices.findAllProducts();
    // Assert
    expect(result).to.be.deep.equal(productsMock);
   

  });
 
  it('Retornando false caso a rota /products/:id não encontrar o id', async function () {
    const falseNumber = 'numero';
    // Arrange
    sinon.stub(productsModels, 'findProductById').resolves(undefined);
    // Act
    const result = await productsServices.findProductById(falseNumber);
    // Assert
    expect(result.type).to.be.deep.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
    
  });

  it('Retornando true caso a rota /products/:id encontrar o id', async function () {
    // Arrange
    sinon.stub(productsModels, 'findProductById').resolves(productById);
    // Act
    const result = await productsServices.findProductById(1);
    // Assert
    expect(result).to.deep.equal(returnGetById);

  });

// Faltando ajustar
  it('Criando produto com sucesso', async function () {

    sinon.stub(productsModels, 'insert').resolves(productById);


    const { type, message } = await productsServices.createProduct("ProdutoX");

    
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal(productById);
   
   
  });

  it('Criando pr com sucesso', async function () {

    const { type, message} = await productsServices.createProduct("abc");


    expect(type).to.be.equal('INVALID_VALUE');
    expect(message).to.be.deep.equal('"name" length must be at least 5 characters long');


  });
  

// // Faltando ajustar
  // it('Criando produto com fracasso', async function () {
  
  //   // sinon.stub(productsModels, 'insert').resolves(1);
  //   // sinon.stub(productsModels, 'findProductById').resolves(productById);

  //   // sinon.stub(validateInput, 'validateName').resolves({
  //   //   type: 422,
  //   //   message: '"name" length must be at least 5 characters long',
  //   // })

  //   const result = await productsServices.createProduct("pan");
  //   expect(result.)

    // expect(res.status).calledWith(422);
    // expect(result).to.deep.equal({ type: 422, message: '"name" length must be at least 5 characters long' });
  // });




  // it('A lista de produtos é um array', async function () {
  //   const products = await productsServices.findAllProducts();

  //   expect(products.).to.be.an('array');
  // })


  afterEach(sinon.restore);

});
