import { Router } from "express";
import { getSolicitud,
         getSolicitudesUsuario,
         postSolicitud 
    } from "../controllers/solicitudes.js";

const router = Router();

router.get('/:id', getSolicitud);
router.get('/usuario/:id', getSolicitudesUsuario);
router.post('/', postSolicitud);

export default router;