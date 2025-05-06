const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
});

// Handle login POST request
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        res.send('Login successful!');
      } else {
        res.send('Invalid username or password.');
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});