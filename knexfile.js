require('dotenv/config')

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOSTNAME,
      database: process.env.DATABASE,
      user: process.env.USER_DATABASE,
      password: process.env.PASSWORD,
      port: process.env.DATABASE_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'database',
      database: 'sapios',
      user: 'root',
      password: 'senha',
      port: '3306'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    useNullAsDefault: true,
  },
}