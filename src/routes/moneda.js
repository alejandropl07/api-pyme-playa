import { Router } from "express";
import { getMonedas } from "../controllers/monedas.js";

const router = Router();

router.get('/', getMonedas);

export default router;