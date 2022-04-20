import { DataTypes } from "sequelize";
import db from "../database/connection.js"

const ClasePedido = db.define("tc_clase_pedido", {
  
    id_clase_pedido:{
        type:DataTypes.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true},

    descrip_clase_pedido:{
        type: DataTypes.STRING
    },
      
},
{
    timestamps: false
},

)

export default ClasePedido;