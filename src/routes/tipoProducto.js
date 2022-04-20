import { Router } from "express";
import { getTiposProducto } from "../controllers/tiposProducto.js";

const router = Router();

router.get('/', getTiposProducto);

export default router;