const express = require('express');
// const salesValidate = require('../middlewares/salesValidate');
const salesControllers = require('../controllers/sales.controllers');

const routerSales = express.Router();

// routerSales.post('/');

routerSales.get('/', salesControllers.findAllSales);
routerSales.get('/:id', salesControllers.findSaleById);

module.exports = routerSales;