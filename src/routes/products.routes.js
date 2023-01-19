const express = require('express');
const productControllers = require('../controllers/products.controllers');

const router = express.Router();


router.get('/', productControllers.findAllProducts);
router.get('/:id', productControllers.findProductById);
router.post('/', productControllers.createProduct);

module.exports = router;
