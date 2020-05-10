const { Pool } = require("pg");

const keys = require("./keys");

const pgClient = new Pool({
  host: keys.pgHost,
  port: keys.pgPort,
  user: keys.pgUser,
  password: keys.pgPassword,
  database: keys.pgDatabase,
});

pgClient.on("error", () => console.log("Connection lost"));

pgClient
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch((error) => console.log(error));

module.exports = pgClient;
