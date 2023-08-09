require("dotenv").config();
const env = process.env;
const config = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: "mysql",
  },

  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DATABASE,
    host: env.DB_HOST,
    dialect: "mysql",
  },

  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DATABASE_TEST,
    host: env.DB_HOST,
    dialect: "mysql",
  },
};
module.exports = config;
