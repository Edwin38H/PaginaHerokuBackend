
const mysql = require ('mysql');
require('dotenv').config();

var connection = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b4571325bb719b',
    password: '31f5f0e8',
    database: 'heroku_627c15c5aa7eeb6'
});
 

module.exports = connection;