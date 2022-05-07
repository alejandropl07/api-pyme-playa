import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const SolicitudProducto = db.define("tc_solicitud_producto", {
  
    id_solicitud:{
        type:DataTypes.BIGINT(11), 
        primaryKey : true, 
        unique : true
    },

    Código:{
        type:DataTypes.BIGINT(11), 
        primaryKey : true, 
        unique : true
    },

    Pfx:{
        type: DataTypes.INTEGER
    },

    Cantidad:{
        type: DataTypes.INTEGER
    },
      
},
{
    timestamps: false
},

)

export default SolicitudProducto;