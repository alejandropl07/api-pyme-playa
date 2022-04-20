import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Destino = db.define("tc_destino", {
  
    id_destino:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_destino:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Destino;