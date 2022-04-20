import { Router } from "express";
import { getEmbarques } from "../controllers/embarques.js";

const router = Router();

router.get('/', getEmbarques);

export default router;