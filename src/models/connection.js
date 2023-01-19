const mysql = require('mysql2/promise');

/* const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'db',
  port: process.env.MYSQL_PORT || 33060,
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || 'root',
  database: 'StoreManager',
}); */

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;