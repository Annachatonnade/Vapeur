const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Route pour afficher tous les jeux
router.get('/', async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: { genre: true, editor: true },
    });
    res.render('games', { games });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors du chargement des jeux.");
  }
});

module.exports = router;