const { Schema, model } = require('mongoose');

const avionSchema = new Schema({
    codigo: {
        type: String,
        unique: true 
     },
    tipo: String
});

module.exports = model('Avion', avionSchema);