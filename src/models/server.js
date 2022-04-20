import express from "express";
import cors from "cors";
import db from "../database/connection.js";
import clientesRoutes from '../routes/cliente.js';
import monedasRoutes from '../routes/moneda.js';
import clasePedidoRoutes from '../routes/clasePedido.js';


export default class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.apiPaths = {
            clientes: '/clientes',
            monedas: '/monedas',
            clasesPedido: '/clasesPedido',
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
        this.app.use(this.apiPaths.clientes, clientesRoutes);
        this.app.use(this.apiPaths.monedas, monedasRoutes);
        this.app.use(this.apiPaths.clasesPedido, clasePedidoRoutes);
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}