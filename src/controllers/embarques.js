import Embarque from "../models/embarque.js"

export const getEmbarques = async (req, res) => {
    const embarques = await Embarque.findAll();

    res.json({embarques});
}