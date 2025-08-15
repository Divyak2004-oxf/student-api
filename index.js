console.log("Starting API file...");
const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Hello Everyone!');
});

// Students route
app.get('/students', (req, res) => {
  res.json([
    { id: 1, name: 'Asha' },
    { id: 2, name: 'Ravi' },
    { id: 3, name: 'Kiran' }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
