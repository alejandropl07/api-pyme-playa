import Solicitud from "../models/solicitud.js"
import  db from "../database/connection.js";


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
  await db.query("SELECT id_solicitud, descrip_solicitud FROM tc_solicitud")
  .then(([results, metadata]) => {
    res.send(results);
  })
  .catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving."
  });
}); 
}