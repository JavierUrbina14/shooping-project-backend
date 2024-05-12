const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

//Crear el servidor de express
const app = express();

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Directorio público
app.use( express.static('public') );

//Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/products', require('./routes/products') );

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});