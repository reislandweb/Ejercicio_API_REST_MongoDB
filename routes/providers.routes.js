const express = require('express');
const router = express.Router();
const controllerProvider = require('../controllers/provider.controllers.js');

router.get('/', controllerProvider.getProviders);
router.post('/', controllerProvider.postProvider);
router.put('/', controllerProvider.putProvider);
router.delete('/', controllerProvider.deleteProvider);

module.exports = router;