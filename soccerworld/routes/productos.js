const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/detalles', productosController.detalles);

module.exports = router;