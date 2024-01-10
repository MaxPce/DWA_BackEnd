const { Schema, model } = require('mongoose');

const miembroSchema = new Schema({
    codigo: {
        type: String,
        unique: true 
     },
    nombre: String
});

module.exports = model('Miembro', miembroSchema);