import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const TipoProducto = db.define("tc_tipo_producto", {
  
    id_tipo_producto:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_tipo_producto:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default TipoProducto;