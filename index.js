const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Crear una App de express
const app = express();

// Cargar archivos dinamicos
app.use(express.static('public'));

// Habilitar el Template Engine
app.set('view engine', 'pug');

// Habilitar body parser
app.use(bodyParse.urlencoded({extended: true}));

// Añadir carpeta que contiene las vistas
app.set('views', path.join(__dirname, './views'));

// Incializar el servidor de express en el puerto 9999
app.listen(9999);