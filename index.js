const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productos');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Integración de las Rutas (Paso 5)
app.use('/api', productosRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Servidor organizado corriendo en http://localhost:${port}`);
});