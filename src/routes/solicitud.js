import { Router } from "express";
import {
  getSolicitud,
  getSolicitudesUsuario,
  isRolDirector,
  isRolLogistico,
  postSolicitud,
  putSolicitud,
  aprobarSolicitud,
  finalizarSolicitud,
  rechazarSolicitud,
  esperarSolicitud,
} from "../controllers/solicitudes.js";

const router = Router();

router.get("/:id", getSolicitud);
router.get("/usuario/:id", getSolicitudesUsuario);
router.get("/usuarioDirector/:id", isRolDirector);
router.get("/usuarioLogistico/:id", isRolLogistico);
router.post("/", postSolicitud);
router.put("/:id", putSolicitud);
router.put("/aprobarSolicitud/:id", aprobarSolicitud);
router.put("/rechazarSolicitud/:id", rechazarSolicitud);
router.put("/finalizarSolicitud/:id", finalizarSolicitud);
router.put("/esperarSolicitud/:id", esperarSolicitud);

export default router;
