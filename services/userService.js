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
    const result = await user.update(fields);
    return result;
  },

  deleteOne: async id => {
    const result = await User.destroy({ where: { id } });
    return result;
  }
};
