const { Schema, model } = require('mongoose');

const personaSchema = new Schema({
    codigo: {
        type: String,
        unique: true 
     },
    nombre: String
});

module.exports = model('persona', personaSchema);