import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Usuario = db.define("tc_usuario", {
  
    id_usuario:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    rol_usuario:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Usuario;