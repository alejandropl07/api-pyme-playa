import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Division = db.define("tc_division", {
  
    id_division:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_division:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Division;