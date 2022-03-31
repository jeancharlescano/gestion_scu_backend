import { Router } from "express";
const router = Router();

import {
  createIndividu,
  getAllIndividus,
  getIndividuById,
  updateIndividuById,
  deleteIndividuById,
} from "../controller/individu.controller.js";

router.post("/", createIndividu);
router.get("/", getAllIndividus);
router.get("/:id", getIndividuById);
router.put("/update/:id", updateIndividuById);
router.delete("/delete/:id", deleteIndividuById);

export default router;
