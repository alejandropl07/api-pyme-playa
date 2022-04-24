import Solicitud from "../models/solicitud.js"

export const getSolicitudes = async (req, res) => {
    const solicitudes = await Solicitud.findAll({
        attributes: ['id_solicitud', 'descrip_solicitud']
    });

    res.json({solicitudes});
}

export const getSolicitud = async (req, res) => {
    const {id} = req.params;
    const solicitud = await Solicitud.findByPk(id);

    if( solicitud ){
        res.json(solicitud);
    } else{
        res.status(404).json({
            msg: `No existe una solicitud con el id ${id}`
        });
    }

}

export const postSolicitud = async (req, res) => {
    const { body } = req;

    try{
        
        const solicitud = await Solicitud.create(body);
        res.json(solicitud);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ha ocurrido un problema. Consulte con el administrador'
            
        })
    }
}

