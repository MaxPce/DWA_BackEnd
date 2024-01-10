const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");


const pilotoSchema = new Schema({
    codigo: {
        type: String,
        unique: true 
     },
    nombre:String,
    horas_vuelo:String
});

module.exports = model('piloto', pilotoSchema);