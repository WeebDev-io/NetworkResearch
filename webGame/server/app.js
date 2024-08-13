const express = require('express');
const cors = require('cors');
const http = require('http');
const sequelize = require('./db');
const routes = require('./api/routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
sequelize.authenticate()
  .then(() => {console.log('Database connection has been established successfully.');})
  .catch((err) => { console.error('Unable to connect to the database:', err); });

sequelize.sync()
  .then(() => { app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); }); })
  .catch((error) => { console.error('Sequelize synchronization error:', error); });