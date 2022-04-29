import { pool } from "../config/database.config.js";

pool.connect;

//#region CRUD

export const createCommentaire = async (req, res) => {
  const { commentaire, date, lieu, action, idUser, idIndvidu } = req.body;

  let result = null;
  await pool
    .query(
      "INSERT INTO commentaire (commentaire, date, lieu, action, id_utilisateur, id_individu) VALUES ($1, $2, $3, $4, $5, $6);",
      [commentaire, date, lieu, action, idUser, idIndvidu]
    )
    .then((_response) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return res.json(result);
};

export const getAllCommentaires = async (req, res) => {
  let result = null;

  await pool
    .query("SELECT * FROM commentaire")
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const getCommentaireById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("SELECT * FROM commentaire WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const updateCommentaireById = async (req, res) => {
  const { id } = req.params;
  const { commentaire, date, lieu, action, idUser, idIndvidu } = req.body;

  let result = null;
  pool
    .query(
      "UPDATE commentaire SET commentaire = $1, date = $2, id_utilisateur = $3, id_individu = $4 WHERE id = $5;",
      [commentaire, date, idUser, idIndvidu, id]
    )
    .then((_res) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
  return res.json(result);
};

export const deleteCommentaireById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("DELETE FROM commentaire WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.error(error));
  return res.json(result);
};
//#endregion
