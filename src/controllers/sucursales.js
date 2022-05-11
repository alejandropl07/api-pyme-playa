import Models from "../models/index.js"

//Devuelve las sucursales
export const getSucursales = async (req, res) => {
    const sucursal = await Models.Sucursal.findAll();

    res.json({sucursal});
}