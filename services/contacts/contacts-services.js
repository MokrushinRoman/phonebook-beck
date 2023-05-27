const { Contact } = require("../../db/models/contact-model");

const getAllContacts = async () => {
  const contacts = await Contact.find({});
  return contacts;
};

const createContact = async (data) => {
  const newContact = await Contact.create(data);
  return newContact;
};

const deleteContact = async (id) => {
  const contact = await Contact.findByIdAndRemove(id);
  return contact;
};

const updateContact = async (id, body) => {
  const contact = await Contact.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  );
  return contact;
};

module.exports = {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
};
