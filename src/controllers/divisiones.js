import Models from "../models/index.js"

//Devuelve las divisiones
export const getDivisiones = async (req, res) => {
    const divisiones = await Models.Division.findAll();

    res.json({divisiones});
}