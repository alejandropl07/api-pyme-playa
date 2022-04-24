import Solicitud from "../models/solicitud.js"

export const postSolicitud = async (req, res) => {
    const { body } = req;
    console.log(body);

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
export const getSolicitudes = async (req, res) => {
    const solicitudes = await Solicitud.findAll({
        attributes: ['id_solicitud', 'descrip_solicitud']
    });

    res.json({solicitudes});
}
