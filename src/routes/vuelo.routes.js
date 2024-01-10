const express = require("express");

const api = express.Router();

const vueloController = require('../controllers/vueloController')

api.get('/listar', vueloController.listar)

api.post('/detalle/:id', vueloController.detalle)

api.post('/registrar', vueloController.registrar)

module.exports = api;