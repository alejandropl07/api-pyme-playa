import Models from "../models/index.js"

export const getUsuarios = async (req, res) => {
    const usuarios = await Models.Usuario.findAll();

    res.json({usuarios});
}

export const getUsuario = async (req, res) => {
    const {id} = req.params;
    const usuario = await Models.Usuario.findByPk(id);

    if( usuario ){
        res.json(usuario);
    }else{
        res.status(404).json({
            msg: `No existe una solicitud con el id ${id}`
        });
    }

 }
