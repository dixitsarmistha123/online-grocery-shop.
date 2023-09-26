const express = require('express');
const app = express();
const path = require('path');
const port = 3001; // You can choose any available port

// Serve static files (e.g., images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the mock products data as an API
app.get('/products', (req, res) => {
  const data = require('./products.json');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Mock API server is running on http://localhost:${port}`);
});
