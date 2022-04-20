import Destino from "../models/destino.js"

export const getDestinos = async (req, res) => {
    const destinos = await Destino.findAll();

    res.json({destinos});
}