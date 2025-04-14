const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/unicorns', async (req, res) => {
  try {
    const response = await axios.post(
      'https://crudcrud.com/api/41eb35a1c69f4c30addc4ad51b364e76/unicorns',
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('Proxy listo en http://localhost:4000'));
