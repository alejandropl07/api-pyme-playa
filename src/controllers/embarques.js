import Models from "../models/index.js"

//Devuelve los embarques
export const getEmbarques = async (req, res) => {
    const embarques = await Models.Embarque.findAll();

    res.json({embarques});
}