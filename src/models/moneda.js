import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Moneda = db.define("tc_moneda", {
  
    id_moneda:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_moneda:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Moneda;