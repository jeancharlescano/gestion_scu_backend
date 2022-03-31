import { Router } from "express";
const router = Router();

import {
  createCommentaire,
  getAllCommentaires,
  getCommentaireById,
  updateCommentaireById,
  deleteCommentaireById,
} from "../controller/commentaire.controller.js";

router.post("/", createCommentaire);
router.get("/", getAllCommentaires);
router.get("/:id", getCommentaireById);
router.put("/update/:id", updateCommentaireById);
router.delete("/delete/:id", deleteCommentaireById);

export default router;
