const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./api/routes/routes');
const PORT = process.env.PORT || 5000;
const sequelize = require('./db');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// let currentTheme = 'Dark';
// Endpoint to get current theme
// app.get('/api/theme', (req, res) => {
//   res.json({ theme: currentTheme });
// });

// Endpoint to update current theme
// app.post('/api/theme', (req, res) => {
//   const { theme } = req.body;
//   console.log('Received theme update:', theme);
//   currentTheme = theme;

//   res.json({ theme: currentTheme });
// });

sequelize.authenticate()
  .then(() => {console.log('Database connection has been established successfully.');})
  .catch((error) => { console.error('Unable to connect to the database:', error); });

sequelize.sync()
  .then(() => { app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); }); })
  .catch((error) => { console.error('Sequelize synchronization error:', error); });