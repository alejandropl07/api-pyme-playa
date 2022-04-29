import { Router } from "express";
import { getSolicitud,
         getSolicitudesUsuario,
         isRolDirector,
         postSolicitud 
    } from "../controllers/solicitudes.js";

const router = Router();

router.get('/:id', getSolicitud);
router.get('/usuario/:id', getSolicitudesUsuario);
router.get('/usuarioDirector/:id', isRolDirector);
router.post('/', postSolicitud);

export default router;