import Models from "../models/index.js"

export const getDestinos = async (req, res) => {
    const destinos = await Models.Destino.findAll();

    res.json({destinos});
}