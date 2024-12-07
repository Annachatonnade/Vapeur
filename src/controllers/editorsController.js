const { Editor } = require('../prisma/generated/prisma-client');

exports.index = async (req, res) => {
  const editors = await Editor.findMany();
  res.render('editors', { editors });
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Editor.create({ data: { name } });
  res.redirect('/editors');
};