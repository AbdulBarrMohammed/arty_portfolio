const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "barrmohammed",
  database: "arty_portfolio",
  password: "Allahis#1",
  port: 5432
});
