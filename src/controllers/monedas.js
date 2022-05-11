import Models from "../models/index.js"

//Devuelve los tipos de monedas
export const getMonedas = async (req, res) => {
    const monedas = await Models.Moneda.findAll();

    res.json({monedas});
}