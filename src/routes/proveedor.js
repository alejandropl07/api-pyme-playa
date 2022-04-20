import { Router } from "express";
import { getProveedores } from "../controllers/proveedores.js";

const router = Router();

router.get('/', getProveedores);

export default router;