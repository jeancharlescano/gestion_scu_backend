import { pool } from "../config/database.config.js";

pool.connect;

//#region CRUD

export const createIndividu = async (req, res) => {
  const { firstName, lastName, surname, phoneNumber, userId } = req.body;

  let result = null;
  await pool
    .query(
      "INSERT INTO individu (nom, prenom, pseudo, telephone, id_utilisateur) VALUES ($1, $2, $3, $4, $5);",
      [lastName, firstName, surname, phoneNumber, userId]
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

export const getAllIndividus = async (req, res) => {
  let result = null;

  await pool
    .query("SELECT * FROM individu")
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const getIndividuById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("SELECT * FROM individu WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const updateIndividuById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, surname, phoneNumber } = req.body;

  let result = null;
  pool
    .query(
      "UPDATE individu SET nom = $1, prenom = $2, pseudo = $3, telephone = $4 WHERE id = $5;",
      [firstName, lastName, surname, phoneNumber, id]
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

export const deleteIndividuById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("DELETE FROM individu WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.error(error));
  return res.json(result);
};
//#endregion
