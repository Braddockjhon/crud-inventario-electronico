const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2606', 
    database: 'inventario_tienda'
});

connection.connect(err => {
    if (err) throw err;
    console.log("✅ Conectado a la base de datos MySQL");
});

module.exports = connection;