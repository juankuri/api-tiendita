require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log("Conectando con usuario:", process.env.DB_USER);
console.log("Password:", JSON.stringify(process.env.DB_PASSWORD));

module.exports = pool;
