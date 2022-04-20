import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Cliente = db.define("tc_cliente", {
  
    id_cliente:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_cliente:{
        type: DataTypes.STRING
    },
      
},

)

export default Cliente;