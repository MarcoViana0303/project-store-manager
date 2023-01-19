const express = require('express');
const productControllers = require('../controllers/products.controllers');

const router = express.Router();

router.get('/', productControllers.findAllProducts);
router.get('/:id', productControllers.findProductById);

module.exports = router;
