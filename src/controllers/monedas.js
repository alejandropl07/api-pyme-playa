import Moneda from "../models/moneda.js"

export const getMonedas = async (req, res) => {
    const monedas = await Moneda.findAll();

    res.json({monedas});
}