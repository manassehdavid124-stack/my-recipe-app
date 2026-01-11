import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Carsupdate7#",
  database: "recipefinder_db",
});
