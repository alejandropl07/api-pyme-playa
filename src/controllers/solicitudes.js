import Models from "../models/index.js"

export const getSolicitudes = async (req, res) => {
    const solicitudes = await Models.Solicitud.findAll({
        attributes: ['id_solicitud', 'descrip_solicitud']
    });

    res.json({solicitudes});
}

export const getSolicitud = async (req, res) => {
    const {id} = req.params;
    const solicitud = await Models.Solicitud.findByPk(id, {
        include: 
          [Models.Division, Models.Sucursal, Models.Proveedor, Models.ClasePedido, Models.Embarque, Models.Cliente, Models.Destino, Models.TipoProducto, Models.Moneda, Models.Usuario ]
    });

    if( solicitud ){
        res.json(solicitud);
    } else{
        res.status(404).json({
            msg: `No existe una solicitud con el id ${id}`
        });
    }

}

// export const getSolicitudUsuario = async (req, res) => {
//     const {id} = req.params;
//     //const usuario = await Models.Usua
// }

export const postSolicitud = async (req, res) => {
    const { body } = req;

    try{
        
        const solicitud = await Models.Solicitud.create(body);
        res.json(solicitud);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ha ocurrido un problema. Consulte con el administrador'
            
        })
    }
}

