import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const SolicitudProducto = db.define("tc_solicitud_producto", {
  
    id_solicitud:{
        type:DataTypes.BIGINT(11), 
        primaryKey : true, 
        unique : true
    },

    id_producto:{
        type:DataTypes.BIGINT(11), 
        primaryKey : true, 
        unique : true
    },

    id_proveedor:{
        type: DataTypes.INTEGER
    },

    cantidad:{
        type: DataTypes.INTEGER
    },
      
},
{
    timestamps: false
},

)

export default SolicitudProducto;