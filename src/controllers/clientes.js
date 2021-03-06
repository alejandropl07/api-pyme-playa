import Models from "../models/index.js";

//Devuelve los clientes
export const getClientes = async (req, res) => {
  const clientes = await Models.Cliente.findAll();

  res.json({ clientes });
};

//Crear nuevo cliente
export const postCliente = async (req, res) => {
  const { body } = req;

  try {
    const existeNombre = await Models.Cliente.findOne({
      where: {
        descrip_cliente: body.descrip_cliente,
      },
    });

    if (existeNombre) {
      return res.status(400).json({
        msg: `Ya existe un cliente con el nombre ${body.descrip_cliente}`,
      });
    }

    const cliente = await Models.Cliente.create(body);
    res.status(200).json({
        msg: "Cliente creado correctamente",
      });
  } catch (error) {
    res.status(500).json({
      msg: "Ha ocurrido un problema. Consulte con el administrador",
    });
  }
};
