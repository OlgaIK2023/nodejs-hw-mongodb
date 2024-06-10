import { ContactsCollection } from '../db/models/contact.js';
import createHttpError from 'http-errors';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllcontacts = async ({ page, perPage }) => {

  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();
  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

    const contacts = await contactsQuery.skip(skip).limit(limit).exec();

    const paginationData = calculatePaginationData(contactsCount, perPage, page);

    return {
      data: contacts,
      ...paginationData,
    };
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