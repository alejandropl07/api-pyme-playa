import Models from "../models/index.js"

export const getMonedas = async (req, res) => {
    const monedas = await Models.Moneda.findAll();

    res.json({monedas});
}