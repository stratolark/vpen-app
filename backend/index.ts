import 'dotenv/config';
import mysql from 'mysql2';
import express, { json } from 'express';
import restaurantsRoutes from './routes/workouts.js';

const connection = mysql.createConnection(process.env.DATABASE_URL || '');

console.log('Connected to PlanetScale!');
// connection.end();
connection.connect();

// app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(json());

// middleware
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// routes
app.use('/', (_req, res) => {
  res.json({
    status: 'sucess',
    data: {
      message: 'Welcome to Express Api!',
    },
  });
});

// api routes
app.use('/api/', (_req, res) => {
  res.json({
    status: 'sucess',
    data: {
      message: 'Try /api/v1/restaurants',
    },
  });
});
app.get('/api/v1/data', (_req, res) => {
  connection.query('SELECT * FROM users', function (err, rows, _fields) {
    if (err) throw err;
    res.json(rows);
  });
});

app.use('/api/v1/restaurants', restaurantsRoutes);

// listen for requests
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
