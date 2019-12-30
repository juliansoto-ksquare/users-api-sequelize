const userService = require("../services/userService");

exports.post = async (req, res) => {
  const result = await userService.createOne(req.body);
  res.json(result);
};

exports.get = async (req, res) => {
  const result = await userService.getAll();
  res.json(result);
};

exports.put = async (req, res) => {
  const result = await userService.updateOne(req.params.id, req.body);
  res.json(result);
};

exports.delete = async (req, res) => {
  const result = await userService.deleteOne(req.params.id);
  res.json(result);
};
