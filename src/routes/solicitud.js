import { Router } from "express";
import { getSolicitudes, 
         getSolicitud,
        // getSolicitudUsuario,
         postSolicitud 
    } from "../controllers/solicitudes.js";

const router = Router();

router.get('/', getSolicitudes);
router.get('/:id', getSolicitud);
//router.get('/:id', getSolicitudUsuario);
router.post('/', postSolicitud);

export default router;