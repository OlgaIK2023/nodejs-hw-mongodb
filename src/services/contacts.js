import { ContactsCollection } from '../db/models/contact.js';
import createHttpError from 'http-errors';

export const getAllcontacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const upsertContactById = async (contactId, payload) => {
  const contact = await ContactsCollection.findByIdAndUpdate(contactId, payload, {
    new: true,
  },
);

if (!contact) {
  throw createHttpError(404, 'Contact not found');
}

return contact;
};

export const deleteContactById = async (contactId) => {
 await ContactsCollection.findByIdAndDelete(contactId);
};