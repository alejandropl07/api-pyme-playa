import { Router } from "express";
import { getSolicitud,
         getSolicitudesUsuario,
         isRolDirector,
         postSolicitud,
         aprobarSolicitud
    } from "../controllers/solicitudes.js";

const router = Router();

router.get('/:id', getSolicitud);
router.get('/usuario/:id', getSolicitudesUsuario);
router.get('/usuarioDirector/:id', isRolDirector);
router.post('/', postSolicitud);
router.put('/aprobarSolicitud/:id', aprobarSolicitud);

export default router;