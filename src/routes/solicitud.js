import { Router } from "express";
import { //getSolicitudes, 
         postSolicitud 
    } from "../controllers/solicitudes.js";

const router = Router();

//router.get('/', getSolicitudes);
router.post('/', postSolicitud);

export default router;