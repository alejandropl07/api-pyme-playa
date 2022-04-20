import { Router } from "express";
import { getClasesPedido } from "../controllers/clasesPedido.js";

const router = Router();

router.get('/', getClasesPedido);

export default router;