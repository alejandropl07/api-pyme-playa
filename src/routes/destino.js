import { Router } from "express";
import { getDestinos } from "../controllers/destinos.js";

const router = Router();

router.get('/', getDestinos);

export default router;