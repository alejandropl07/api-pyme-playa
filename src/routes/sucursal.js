import { Router } from "express";
import { getSucursales } from "../controllers/sucursales.js";

const router = Router();

router.get('/', getSucursales);

export default router;