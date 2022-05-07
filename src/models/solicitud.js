import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Solicitud = db.define("tc_solicitud", {
  
    id_solicitud:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true
    },

    referencia:{
        type: DataTypes.STRING
    },

    descrip_solicitud:{
        type: DataTypes.STRING
    },

    fecha_entrega:{
        type: DataTypes.DATE
    },

    valor_solicitud:{
        type: DataTypes.STRING
    },

    causa_espera:{
        type: DataTypes.STRING
    },

    contrato_solicitud:{
        type: DataTypes.STRING
    },

    fecha_finalizada:{
        type: DataTypes.DATE
    },

    fecha_aprobada:{
        type: DataTypes.DATE
    },

    fecha_espera:{
        type: DataTypes.DATE
    },

    fecha_rechazada:{
        type: DataTypes.DATE
    },

    fecha_revisada:{
        type: DataTypes.DATE
    },

    id_division:{
        type: DataTypes.INTEGER
    },

    id_sucursal:{
        type: DataTypes.INTEGER
    },

    id_proveedor:{
        type: DataTypes.INTEGER
    },

    id_clase_pedido:{
        type: DataTypes.INTEGER
    },

    id_embarque:{
        type: DataTypes.INTEGER
    },

    id_cliente:{
        type: DataTypes.INTEGER
    },

    id_destino:{
        type: DataTypes.INTEGER
    },

    id_tipo_producto:{
        type: DataTypes.INTEGER
    },

    id_moneda:{
        type: DataTypes.INTEGER
    },

    id_comercial:{
        type: DataTypes.INTEGER
    },

      
})

export default Solicitud;