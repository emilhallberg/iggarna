const base = {
  client: "pg",
  version: "11.6",
  pool: {
    min: 2,
    max: 10,
    idleTimeoutMillis: 20 * 100,
  },
};

const migrations = {
  directory: "./migrations",
};

const host = "localhost";
const port = 15432;
const user = "username";
const password = "password";
const database = "iggarna";

module.exports = {
  development: {
    ...base,
    connection: {
      host,
      port,
      user,
      password,
      database,
    },
    migrations,
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    ...base,
    connection: {
      host: process.env.DB_HOST || host,
      port: Number(process.env.DB_PORT) || port,
      user: process.env.DB_USER || user,
      password: process.env.DB_PASSWORD || password,
      database: process.env.DB_DATABSE || database,
      ssl: !!Number(process.env.DB_SSL) || 0,
    },
    migrations,
  },
};
