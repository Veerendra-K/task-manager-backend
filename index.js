const express = require('express');
const app = express();
const db = require('./db');

// middleware to read JSON
app.use(express.json());

// TEMP: In-memory tasks data(array)
let tasks = [] ;

// GET all tasks
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});


// POST a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  const sql = 'INSERT INTO tasks (title, status) VALUES (?, ?)';
  const values = [title, 'pending'];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({
      id: result.insertId,
      title,
      status: 'pending'
    });
  });
});


// UPDATE task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, status } = req.body;

  const sql = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const values = [title, status, taskId];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({
      id: taskId,
      title,
      status
    });
  });
});


// DELETE task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const sql = 'DELETE FROM tasks WHERE id = ?';

  db.query(sql, [taskId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  });
});



// start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});