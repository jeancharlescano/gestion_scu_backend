import { Router } from "express";
const router = Router();

import {
  createUtilisateur,
  getAllUtilisateurs,
  getUtilisateurById,
  updateUtilisateurById,
  deleteUtilisateurById,
} from "../controller/utilisateur.controller.js";

router.post("/", createUtilisateur);
router.get("/", getAllUtilisateurs);
router.get("/:id", getUtilisateurById);
router.put("/update/:id", updateUtilisateurById);
router.delete("/delete/:id", deleteUtilisateurById);

export default router;
