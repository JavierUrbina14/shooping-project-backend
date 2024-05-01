// Update with your config settings.
const dotenv = require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: process.env.DEV_DB_CLIENT,
    connection: {
      database: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASS,
      host: process.env.DEV_DB_HOST,
      port: process.env.DEV_DB_PORT,
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  staging: {
    client: process.env.STAG_DB_CLIENT,
    connection: {
      database: process.env.STAG_DB_NAME,
      user: process.env.STAG_DB_USER,
      password: process.env.STAG_DB_PASS,
      host: process.env.STAG_DB_HOST,
      port: process.env.STAG_DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: process.env.PROD_DB_CLIENT,
    connection: {
      database: process.env.PROD_DB_NAME,
      user: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PASS,
      host: process.env.PROD_DB_HOST,
      port: process.env.PROD_DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
