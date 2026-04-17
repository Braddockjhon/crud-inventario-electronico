const connection = require('../config/db');

// 1. Listar todos
exports.listarProductos = (req, res) => {
    connection.query("SELECT * FROM productos", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// 2. Crear
exports.crearProducto = (req, res) => {
    const producto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen || ''
    };
    connection.query("INSERT INTO productos SET ?", producto, (err, result) => {
        if (err) throw err;
        res.send('✅ Producto creado');
    });
};

// 3. Actualizar (UPDATE)
exports.actualizarProducto = (req, res) => {
    const { id } = req.params;
    const nuevoProducto = req.body;
    connection.query("UPDATE productos SET ? WHERE id = ?", [nuevoProducto, id], (err, result) => {
        if (err) throw err;
        res.send('🔄 Producto actualizado');
    });
};

// 4. Eliminar (DELETE)
exports.eliminarProducto = (req, res) => {
    const { id } = req.params;
    connection.query("DELETE FROM productos WHERE id = ?", [id], (err, result) => {
        if (err) throw err;
        res.send('🗑️ Producto eliminado');
    });
};