const Vuelo = require(`../models/Vuelo`)

async function registrar(req, res){
    try{
        const body = req.body
        await Vuelo.create(body)
        res.status(201).json({
            message: "Vuelo registrado correctamente"
        })
    }catch(e){
        res.status(500).json({
            message: e
        })
    }
}

async function listar(req, res){
    try {
        const vuelos = await Vuelo.find().populate('num_vuelo').populate('origen').populate('destino').populate('hora').populate('fecha');
        res.status(201).json(vuelos);
    } catch (error) {
        console.log('error',error)
    }
}

async function detalle(req, res){
    try {

        const id = req.params.id;
        const vuelo = await Vuelo.findOne({ _id : id}).populate('num_vuelo').populate('origen').populate('destino').populate('hora').populate('fecha')
        console.log(vuelo);
        res.status(201).json({
                vuelo: vuelo,
            });
    } catch (error) {
        console.log('error',error)
    }
}

module.exports = {
    listar,
    registrar,
    detalle
};