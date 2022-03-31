import { Router } from "express";

import utilisateurs from "./utilisateur.routes.js";
import individus from "./individu.routes.js";
import commentaire from "./commentaire.routes.js";

const router = Router();

//creation de la route pour l'api
router.use("/utilisateur", utilisateurs);
router.use("/individu", individus);
router.use("/commentaire", commentaire);

export default router;
