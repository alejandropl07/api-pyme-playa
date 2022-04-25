import Models from "../models/index.js"

export const getEmbarques = async (req, res) => {
    const embarques = await Models.Embarque.findAll();

    res.json({embarques});
}