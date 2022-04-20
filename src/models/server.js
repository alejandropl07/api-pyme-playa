import express from "express";
import cors from "cors";
import db from "../database/connection.js";
import clientesRoutes from '../routes/cliente.js';


export default class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.clientesPath = {
            clientes: '/clientes'
        }
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Conectado');

        }catch(error){
            throw new Error(error);
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.clientesPath.clientes, clientesRoutes);
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}