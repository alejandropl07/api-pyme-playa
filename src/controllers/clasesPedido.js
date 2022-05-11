import Models from "../models/index.js"

//Devuelve las clases de pedidos de la BD
export const getClasesPedido = async (req, res) => {
    const clasesPedido = await Models.ClasePedido.findAll();

    res.json({clasesPedido});
}