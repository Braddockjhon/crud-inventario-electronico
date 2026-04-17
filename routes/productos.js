const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/productos', productosController.listarProductos);
router.post('/productos', productosController.crearProducto);

// Nuevas rutas para el CRUD completo
router.put('/productos/:id', productosController.actualizarProducto);
router.delete('/productos/:id', productosController.eliminarProducto);

module.exports = router;