const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const Renta=new Schema({
    idVehiculo:String,
    idUsuario:String,
    cedula:String,
    placa :String,
    dias:String,
    monto: String
});

module.exports=mongoose.model('Usuarios',Usuario);