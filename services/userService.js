const User = require("../models").User;

module.exports = {
  getAll: async () => {
    const result = await User.findAll({});
    return result;
  },

  createOne: async user => {
    const result = await User.create(user);
    return result;
  },

  updateOne: async (id, fields) => {
    const user = await User.findOne({ where: { id } });
    if (!user) return null;
    const result = await user.update(fields);
    return result;
  },

  deleteOne: async id => {
    const result = await User.destroy({ where: { id } });
    if (result === 0) return null;
    return {};
  }
};
