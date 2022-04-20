import { Router } from "express";
import { getDivisiones } from "../controllers/divisiones.js";

const router = Router();

router.get('/', getDivisiones);

export default router;