import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Sucursal = db.define("tc_sucursal", {
  
    id_sucursal:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_sucursal:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Sucursal;