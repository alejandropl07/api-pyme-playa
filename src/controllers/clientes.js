import Cliente from "../models/cliente.js"

export const getClientes = async (req, res) => {
    const clientes = await Cliente.findAll();

    res.json({clientes});
}

export const postCliente = async (req, res) => {
    const { body } = req;

    try{
        const existeNombre = await Cliente.findOne({
            where: {
                descrip_cliente: body.descrip_cliente
            }
        });

        if(existeNombre){
            return res.status(400).json({
                msg: `Ya existe un cliente con el nombre ${body.nombre}` 
            });
        }

        const cliente = await Cliente.create(body);
        res.json(cliente);
    }catch(error){
        res.status(500).json({
            msg: 'Ha ocurrido un problema. Consulte con el administrador'
        })
    }
}