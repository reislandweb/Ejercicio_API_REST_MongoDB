const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controllers');

router.get('/products', controller.getProducts);
router.post('/products', controller.postProduct);
router.put('/products', controller.putProduct);
router.delete('/products', controller.deleteProduct);

module.exports = router;