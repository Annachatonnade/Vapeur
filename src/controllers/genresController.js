const { Genre } = require('../prisma/generated/prisma-client');

exports.index = async (req, res) => {
  const genres = await Genre.findMany();
  res.render('genres', { genres });
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Genre.create({ data: { name } });
  res.redirect('/genres');
};
