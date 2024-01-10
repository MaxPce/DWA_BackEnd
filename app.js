const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const config = require('./src/config/config');

const connection = require('./src/database/dbController')

//Routes
const vuelo_routes = require('./src/routes/vuelo.routes')

const cors = require('cors');

connection()

//data
const Avion = require(`./src/models/Avion`)
const Base = require(`./src/models/Base`)
const Miembro = require(`./src/models/Miembro`)
const Persona = require(`./src/models/Persona`)
const Piloto = require(`./src/models/Piloto`)


async function data(){
    const avion = await Avion.create({
        codigo: "BOEING-747",
        tipo: "Regional"
    })

    const piloto = await Piloto.create({
        codigo: "001",
        nombre: "Josh",
        horas_vuelo: "5",
    })

    const miembro = await Avion.create({
        codigo: "001",
        nombre: "Max",
    })

    const vuelo = await Vuelo.create({
        num_vuelo: 'IB-8830',
        origen: 'Lima',
        destino: 'Piura',
        hora: '13:50',
        fecha: '10/04/2024'
    })
}


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/vuelo', vuelo_routes)


app.get("/",(req, res)=>{
    res.json({
        message: "Bienvenido"
    })
})

async function init(){
    await app.listen(config.port, () => {
        console.log(`Servidor corriendo en http://localhost:${config.port}`);
    });
}

init()