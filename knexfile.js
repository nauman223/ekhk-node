require('dotenv').config({
  path: `${process.env.PWD}/config/${process.env.NODE_ENV || 'development'
    }.env`,
});

console.log('migration File');

module.exports = {
  client: 'pg',
  connection: {
    host: "localhost",// process.env.POSTGRES_HOST,
    user: "postgres",//process.env.POSTGRES_USER,
    port: 5432,
    password: "123",//process.env.POSTGRES_PASSWORD,
    database: "auth"//process.env.POSTGRES_DB,
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migartion'
  },
  seeds: {
    directory: '../config/db/seeds',
  }
};
