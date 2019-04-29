const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const Vehiculo=new Schema({
    placa:String,
    capacidad :String,
    idMarca: String,
    idEstilo:String,
    modelo:String,
    color:String,
    cilindrada:String,
    combustible:String,
    transmision:String,
    año:String,
    extras:String,
    pasajeros:String,
    precio:String,
    estado:String
});

module.exports=mongoose.model('Vehiculos',Vehiculo);