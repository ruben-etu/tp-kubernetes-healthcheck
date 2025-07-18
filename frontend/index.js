const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', async (req, res) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 50);
  try {
    const response = await fetch('http://backend/hello', { signal: controller.signal });
    clearTimeout(timeout);
    if (response.status === 200) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(500);
    }
  } catch (err) {
    clearTimeout(timeout);
    return res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
