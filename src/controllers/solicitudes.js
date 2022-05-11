
import Models from "../models/index.js";
import {Op} from 'sequelize';

//Devuelve una solicitud dado un id
export const getSolicitud = async (req, res) => {
  const { id } = req.params;
  try {
    const solicitud = await Models.Solicitud.findByPk(id, {
      include: [
        Models.Division,
        Models.Sucursal,
        Models.Proveedor,
        Models.ClasePedido,
        Models.Embarque,
        Models.Cliente,
        Models.Destino,
        Models.TipoProducto,
        Models.Moneda,
        Models.Usuario,
        Models.SolicitudProducto,
      ],
    });

    if (solicitud) {
      res.json(solicitud);
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Devuelve las solicitudes dado un id de usuario
export const getSolicitudesUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Models.Usuario.findByPk(id);

  try {
    if (usuario) {
      if (usuario.rol_usuario === "Comercial") {
        const solicitudes = await Models.Solicitud.findAll({
          where: {
            id_comercial: usuario.id_usuario,
          },
          attributes: ["id_solicitud", "descrip_solicitud", "fecha_finalizada"],
        });
        res.json(solicitudes);
      } else if (usuario.rol_usuario === "Director") {
        const solicitudes = await Models.Solicitud.findAll({
          where:{
            fecha_finalizada: {
              [Op.not]: null // Like: sellDate IS NOT NULL
            },
            fecha_aprobada: {
              [Op.is]: null // Like: sellDate IS NULL
            },
            fecha_rechazada: {
              [Op.is]: null // Like: sellDate IS NULL
            },
          },
         
          attributes: ["id_solicitud", "descrip_solicitud", "fecha_aprobada", "fecha_rechazada", "fecha_espera"],
        });

        res.json(solicitudes);
      }
      else if (usuario.rol_usuario === "Logistico") {
        const solicitudes = await Models.Solicitud.findAll({
          where:{
            fecha_aprobada: {
              [Op.not]: null // Like: sellDate IS NOT NULL
            },
            fecha_revisada: {
              [Op.is]: null // Like: sellDate IS NOT NULL
            },
          },
         
          attributes: ["id_solicitud", "descrip_solicitud", "fecha_aprobada", "fecha_rechazada", "fecha_espera",  "fecha_revisada"],
        });

        res.json(solicitudes);
      }
    } else {
      res.status(404).json({
        msg: `No existen solicitudes para el usuario con el id ${id} `,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Conocer si un usuario es director, dado su id
export const isRolDirector = async (req, res) => {
  const { id } = req.params;
  let result = false;

  try {
    const usuario = await Models.Usuario.findByPk(id);
    if (usuario) {
      if (usuario.rol_usuario === "Director") {
        result = true;
      }

      res.json(result);
    } else {
      res.status(404).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Conocer si un usuario es logistico, dado su id
export const isRolLogistico = async (req, res) => {
  const { id } = req.params;
  let result = false;

  try {
    const usuario = await Models.Usuario.findByPk(id);
    if (usuario) {
      if (usuario.rol_usuario === "Logistico") {
        result = true;
      }

      res.json(result);
    } else {
      res.status(404).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Crear nueva solicitud
export const postSolicitud = async (req, res) => {
  const { body } = req;
  const { productos } = body;

  try {
    const solicitud = await Models.Solicitud.create(body);

    productos.map((producto) => {
      Models.SolicitudProducto.create({
        id_solicitud: solicitud.id_solicitud,
        Pfx: producto.Pfx,
        Código: producto.Código,
        Cantidad: producto.Cantidad,
      });
    });

    res.status(200).json({
      msg: "Solicitud creada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ha ocurrido un problema. Consulte con el administrador",
    });
  }
};

//Actualizar solicitud
export const putSolicitud = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { productos } = body;
  

  try {
    const solicitud = await Models.Solicitud.findByPk(id);
    if (solicitud) {
      await solicitud.update(body);

      Models.SolicitudProducto.destroy({
        where: {
          id_solicitud: id,
        },
      });

      productos.map((producto) => {
        Models.SolicitudProducto.create({
          id_solicitud: solicitud.id_solicitud,
          Pfx: producto.Pfx,
          Código: producto.Código,
          Cantidad: producto.Cantidad,
        });
      });
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
    res.json(solicitud);
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Aprobar solicitud por parte del director
export const aprobarSolicitud = async (req, res) => {
  const { id } = req.params;

  try {
    const solicitud = await Models.Solicitud.findByPk(id);

    if (solicitud) {
      if(solicitud.causa_espera === "")
         solicitud.update({ fecha_aprobada: new Date()});
      else
         solicitud.update({ fecha_aprobada: new Date(), causa_espera: "", fecha_espera: null });
      res.json(solicitud);
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Aprobar solicitud por parte del logistico
export const aprobarSolicitudLog = async (req, res) => {
  const { id } = req.params;

  try {
    const solicitud = await Models.Solicitud.findByPk(id);

    if (solicitud) {
         solicitud.update({ fecha_revisada: new Date()});
      res.json(solicitud);
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Rechazar solicitud por parte del director
export const rechazarSolicitud = async (req, res) => {
  const { id } = req.params;

  try {
    const solicitud = await Models.Solicitud.findByPk(id);

    if (solicitud) {
      if(solicitud.causa_espera === "")
          solicitud.update({ fecha_rechazada: new Date() });
      else
          solicitud.update({ fecha_rechazada: new Date(), causa_espera: "", fecha_espera: null });
      res.json(solicitud);
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Poner solicitud en espera
export const esperarSolicitud = async (req, res) => {
  const { id } = req.params;
  const {causa_espera}  = req.body;

  try {
    const solicitud = await Models.Solicitud.findByPk(id);

    if (solicitud) {
      solicitud.update({ fecha_espera: new Date(), causa_espera});
      res.json(solicitud);
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};

//Finalizar solicitud por parte del comercial
export const finalizarSolicitud = async (req, res) => {
  const { id } = req.params;

  try {
    const solicitud = await Models.Solicitud.findByPk(id);

    if (solicitud) {
      solicitud.update({ fecha_finalizada: new Date() });
      res.json(solicitud);
    } else {
      res.status(404).json({
        msg: `No existe una solicitud con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "No se pudo realizar la operación. Póngase en contacto con el administrador",
    });
  }
};
