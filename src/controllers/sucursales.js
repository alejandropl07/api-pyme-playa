import Sucursal from "../models/sucursal.js"

export const getSucursales = async (req, res) => {
    const sucursal = await Sucursal.findAll();

    res.json({sucursal});
}