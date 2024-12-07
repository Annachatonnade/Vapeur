const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuration de Handlebars
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const gamesRoutes = require('./routes/games');
app.use('/games', gamesRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`));
