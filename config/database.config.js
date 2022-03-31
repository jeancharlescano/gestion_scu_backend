import pkg from "pg";
const { Pool } = pkg;

//connexion a la bdd local
export const pool = new Pool({
  user: "postgres",
  host: "localhost", // <== a changer par l'ip de la machine si bdd sur serveur
  database: "gestionscu",
  password: "password",
  port: 5432,
});

pool.connect;
