// lib/db.js
import mysql from "mysql2/promise";

// replace with your local MySQL credentials
export const db = mysql.createPool({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "Carsupdate7#",       // your MySQL password
  database: "recipefinder_db", // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
