const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Twój użytkownik MySQL
  password: 'Lukasz2468!', // Twoje hasło MySQL
  database: 'topiclist', // Twoja baza danych
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
