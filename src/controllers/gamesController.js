const { Game, Genre, Editor } = require('../prisma/generated/prisma-client');

exports.index = async (req, res) => {
  const games = await Game.findMany({
    include: { genre: true, editor: true },
  });
  res.render('index', { games });
};

exports.create = async (req, res) => {
  const { title, releaseDate, genreId, editorId } = req.body;
  await Game.create({
    data: {
      title,
      releaseDate: new Date(releaseDate),
      genreId,
      editorId,
    },
  });
  res.redirect('/games');
};
