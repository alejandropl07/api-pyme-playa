import Models from "../models/index.js"

export const getClientes = async (req, res) => {
    const clientes = await Models.Cliente.findAll();

    res.json({clientes});
}

export const postCliente = async (req, res) => {
    const { body } = req;

    try{
        const existeNombre = await Models.Cliente.findOne({
            where: {
                descrip_cliente: body.descrip_cliente
            }
        });

        if(existeNombre){
            return res.status(400).json({
                msg: `Ya existe un cliente con el nombre ${body.descrip_cliente}` 
            });
        }

        const cliente = await Models.Cliente.create(body);
        res.json(cliente);
    }catch(error){
        res.status(500).json({
            msg: 'Ha ocurrido un problema. Consulte con el administrador'
        })
    }
}