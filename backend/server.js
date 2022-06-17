require('dotenv').config();

import express from 'express';

// app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// routes
app.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/v1/me', (_req, res) => {
  res.json(
    {
      me: 'Hey its me'
    }
  )
})

// listen for requests
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
