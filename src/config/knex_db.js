const { Model } = require('objection');

const config = require('./knexfile');
const environmentConfig = config; //[process.env.NODE_ENV || 'development'];
const connection = require('knex')(environmentConfig);

console.log('knex connection......', config.connection);

Model.knex(connection);
module.exports = connection;
