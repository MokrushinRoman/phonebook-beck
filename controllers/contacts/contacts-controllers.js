const {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
} = require("../../services/contacts/contacts-services");
const asyncWrapper = require("../../helpers/asyncWrapper");

const getAll = async (req, res) => {
  const contacts = await getAllContacts();

  res.json(contacts);
};

const create = async (req, res) => {
  const newContact = await createContact(req.body);

  res.status(201).json(newContact);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  const contact = await deleteContact(contactId);
  if (!contact) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json({ message: "Contact has been deleted" });
};

const update = async (req, res) => {
  const { contactId } = req.params;

  const contact = await updateContact(contactId, req.body);
  if (!contact) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(201).json(contact);
};

module.exports = {
  getAll: asyncWrapper(getAll),
  create: asyncWrapper(create),
  removeContact: asyncWrapper(removeContact),
  update: asyncWrapper(update),
};
