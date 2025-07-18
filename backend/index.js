const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', async (req, res) => {
    return res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
