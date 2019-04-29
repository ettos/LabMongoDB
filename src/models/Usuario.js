const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const Usuario=new Schema({
    cedula:String,
    nombre :String,
    apellido:String,
    correo: String,
    numeroTelefonico:String
});

module.exports=mongoose.model('Usuarios',Usuario);