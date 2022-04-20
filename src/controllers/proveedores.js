import Proveedor from "../models/proveedor.js"

export const getProveedores = async (req, res) => {
    const proveedores = await Proveedor.findAll();

    res.json({proveedores});
}