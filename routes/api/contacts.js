const express = require("express");

const {
  getAll,
  create,
  removeContact,
  update,
} = require("../../controllers/contacts/contacts-controllers");
const validateContact = require("../../middlewares/validation/contacts-validation");
const isValidId = require("../../middlewares/validation/isValidId");

const router = express.Router();

router.get("/", getAll);

router.post("/", validateContact, create);

router.delete("/:contactId", isValidId, removeContact);

router.put("/:contactId", validateContact, isValidId, update);

module.exports = router;
