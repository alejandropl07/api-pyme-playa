import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Proveedor = db.define("tc_proveedor", {
  
    id_proveedor:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_proveedor:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Proveedor;