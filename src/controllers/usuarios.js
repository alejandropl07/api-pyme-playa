import Models from "../models/index.js"

export const getUsuarios = async (req, res) => {
    const usuarios = await Models.Usuario.findAll();

    res.json({usuarios});
}