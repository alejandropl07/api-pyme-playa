import { Router } from "express";
import { getUsuarios } from "../controllers/usuarios.js";

const router = Router();

router.get('/', getUsuarios);

export default router;