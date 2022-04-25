import Models from "../models/index.js"

export const getClasesPedido = async (req, res) => {
    const clasesPedido = await Models.ClasePedido.findAll();

    res.json({clasesPedido});
}