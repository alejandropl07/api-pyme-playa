import { Router } from "express";
import { getSolicitudes, 
         getSolicitud,
         postSolicitud 
    } from "../controllers/solicitudes.js";

const router = Router();

router.get('/', getSolicitudes);
router.get('/:id', getSolicitud);
router.post('/', postSolicitud);

export default router;