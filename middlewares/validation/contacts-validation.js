const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  number: Joi.string().min(8).max(20).required(),
});

const validateContact = (req, res, next) => {
  const keys = Object.keys(req.body);
  if (keys.length === 0) return res.status(400).json({ message: "Empty body" });

  const fields = ["name", "number"];

  for (const field of fields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `Missing required ${field}` });
    }
  }

  const { error } = addContactSchema.validate(req.body);
  if (error) res.status(400).json({ message: `${error.message}` });
  next();
};

module.exports = validateContact;
