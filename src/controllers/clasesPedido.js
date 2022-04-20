import ClasePedido from "../models/clasePedido.js"

export const getClasesPedido = async (req, res) => {
    const clasesPedido = await ClasePedido.findAll();

    res.json({clasesPedido});
}