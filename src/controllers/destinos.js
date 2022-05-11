import Models from "../models/index.js"

//Devuelve los destinos
export const getDestinos = async (req, res) => {
    const destinos = await Models.Destino.findAll();

    res.json({destinos});
}