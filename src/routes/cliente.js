import { Router } from "express";
import { getClientes, 
         postCliente 
    } from "../controllers/clientes.js";

const router = Router();

router.get('/', getClientes);
router.post('/', postCliente);

export default router;