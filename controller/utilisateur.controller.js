import { pool } from "../config/database.config.js";
import sha256 from "crypto-js/sha256.js";

pool.connect;

//#region CRUD

export const createUtilisateur = async (req, res) => {
  let {
    firstName,
    lastName,
    surname,
    password,
    phoneNumber,
    rank,
    role,
    isAdmin,
  } = req.body;

  password = sha256(password).toString();

  let result = null;
  await pool
    .query(
      "INSERT INTO utilisateur (nom, prenom, pseudo, mot_de_passe, telephone, grade, specialite, isadmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
      [firstName, lastName, surname, password, phoneNumber, rank, role, isAdmin]
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

export const getAllUtilisateurs = async (req, res) => {
  let result = null;

  await pool
    .query("SELECT * FROM utilisateur")
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const getUtilisateurById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("SELECT * FROM utilisateur WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const updateUtilisateurById = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    surname,
    password,
    phoneNumber,
    rank,
    role,
    isAdmin,
  } = req.body;

  let result = null;
  pool
    .query(
      "UPDATE utilisateur SET nom = $1, prenom = $2, pseudo = $3, mot_de_passe = $4, telephone = $5, grade = $6, specialite = $7, idAdmin = $8  WHERE id = $9;",
      [
        firstName,
        lastName,
        surname,
        password,
        phoneNumber,
        rank,
        role,
        isAdmin,
        id,
      ]
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

export const deleteUtilisateurById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("DELETE FROM utilisateur WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.error(error));
  return res.json(result);
};
//#endregion
