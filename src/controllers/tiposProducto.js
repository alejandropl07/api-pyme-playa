import Models from "../models/index.js"

//Devuelve los tipos de producto
export const getTiposProducto = async (req, res) => {
    const tiposProducto = await Models.TipoProducto.findAll();

    res.json({tiposProducto});
}