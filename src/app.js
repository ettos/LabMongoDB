const path = require('path');
const express = require('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');


const app = express();

//Conexion
mongoose.connect('mongodb://localhost/RentaCar')
    .then(db => console.log ('Base Conectada'))
    .catch(err => console.log(err));

// importando rutas
const indexRoutes=require('./routes/index');

// Configuracion
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))


//routes
app.use('/',indexRoutes);


//Iniciacion del servidor
app.listen(app.get('port'),()=> {
    console.log(`Server on port ${app.get('port')}`);
});