const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const gamesRoutes = require('./routes/games');
const genresRoutes = require('./routes/genres');
const editorsRoutes = require('./routes/editors');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/games', gamesRoutes);
app.use('/genres', genresRoutes);
app.use('/editors', editorsRoutes);

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
