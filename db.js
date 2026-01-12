const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Animal@123',
  database: 'taskdb'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
  console.log('Connected to the MySQL database.');
  }
});

module.exports = db;