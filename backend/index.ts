import 'dotenv/config';
import mysql from 'mysql2';
import express, { json } from 'express';
import restaurantsRoutes from './routes/restaurants';

const connection = mysql.createConnection(process.env.DATABASE_URL || '');

// console.log('Connected to PlanetScale!');
// // connection.end();
// connection.connect();

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

app.use('/api/restaurants', restaurantsRoutes);

// app.use('/', (_req, res, next) => {
//   res.json({
//     status: 'sucess',
//     data: {
//       message: 'Welcome to Express Api!',
//     },
//   });
//   next();
// });

// // api routes
// app.use('/api', (_req, res, next) => {
//   res.json({
//     status: 'sucess',
//     data: {
//       message: 'Try /api/restaurants',
//     },
//   });
//   next();
// });
app.get('/api/data', (_req, res) => {
  connection.query('SELECT * FROM users', function (err, rows, _fields) {
    if (err) throw err;
    res.json(rows);
  });
});

// listen for requests
// console.log('Connected to PlanetScale!');
// connection.end();
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err);
    return;
  }
  app.listen(PORT, () => {
    console.log('[PlanetScale]: Connected to PlanetScale!');
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
});
// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });
