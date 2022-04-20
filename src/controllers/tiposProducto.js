import TipoProducto from "../models/tipoProducto.js"

export const getTiposProducto = async (req, res) => {
    const tiposProducto = await TipoProducto.findAll();

    res.json({tiposProducto});
}