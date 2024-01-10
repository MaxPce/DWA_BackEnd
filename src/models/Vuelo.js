const { Schema, model } = require('mongoose');
const mongoose = require("mongoose")

const vueloSchema = new Schema({
    num_vuelo: String,
    origen: String,
    destino: String,
    hora: String,
    fecha: String
});

module.exports = model('Vuelo', vueloSchema);