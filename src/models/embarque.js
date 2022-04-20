import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const Embarque = db.define("tc_embarque", {
  
    id_embarque:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_embarque:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default Embarque;