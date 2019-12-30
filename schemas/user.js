const Joi = require("@hapi/joi");

module.exports = Joi.object({
  favoritePokemon: Joi.string().min(2),

  firstName: Joi.string()
    .alphanum()
    .min(2)
    .max(32)
    .required(),

  lastName: Joi.string()
    .alphanum()
    .min(2)
    .max(32)
    .required(),

  username: Joi.string()
    .alphanum()
    .min(2)
    .max(32)
    .required(),

  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(new RegExp("^[a-zA-Z0-9]{6}$"))
    .required(),

  birthYear: Joi.number()
    .integer()
    .min(1900)
    .max(2013)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
});
