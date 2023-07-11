const express = require('express');
const app = express();

app.get('/api/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

const port = 3000; // Choose the desired port for your API
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
