const express = require('express');
const productControllers = require('../controllers/products.controllers');
const nameValidate = require('../middlewares/nameValidate');

const router = express.Router();

router.get('/', productControllers.findAllProducts);
router.get('/:id', productControllers.findProductById);
router.post('/', nameValidate.validateName, productControllers.createProduct);

router.put('/:id', nameValidate.validateName, productControllers.updateById);
router.delete('/:id', productControllers.deleteById);

module.exports = router;
