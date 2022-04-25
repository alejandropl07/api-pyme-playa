import Models from "../models/index.js"

export const getTiposProducto = async (req, res) => {
    const tiposProducto = await Models.TipoProducto.findAll();

    res.json({tiposProducto});
}