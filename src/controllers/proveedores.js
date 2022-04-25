import Models from "../models/index.js"

export const getProveedores = async (req, res) => {
    const proveedores = await Models.Proveedor.findAll();

    res.json({proveedores});
}