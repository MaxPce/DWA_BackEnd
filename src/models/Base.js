const { Schema, model } = require('mongoose');

const baseSchema = new Schema({
    name: String
});

module.exports = model('Base', baseSchema);