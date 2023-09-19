const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
app.use(methodOverride('_method')) // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
// const jwt = require("jsonwebtoken");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
const rutasIndex = require('./src/routes/indexRoutes')
app.use('/', rutasIndex)
/*
*/

const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: http://localhost:${port}`)
})
