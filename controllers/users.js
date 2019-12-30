const userService = require("../services/userService");

exports.post = async (req, res) => {
  const result = await userService.createOne(req.body);
  res.json(result);
};

exports.get = async (req, res) => {
  const { offset, limit, sort } = req.query;
  const result = await userService.getAll({ offset, limit, sort });
  res.json(result);
};

exports.put = async (req, res) => {
  const result = await userService.updateOne(req.params.id, req.body);
  if (!result) return res.status(404).end();
  res.json(result);
};

exports.delete = async (req, res) => {
  const result = await userService.deleteOne(req.params.id);
  if (!result) return res.status(404).end();
  res.json(result);
};
