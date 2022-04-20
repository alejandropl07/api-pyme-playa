import Division from "../models/division.js"

export const getDivisiones = async (req, res) => {
    const divisiones = await Division.findAll();

    res.json({divisiones});
}