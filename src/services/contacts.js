import { StudentsCollection } from '../db/models/contact.js';

export const getAllcontacts = async () => {
  const students = await StudentsCollection.find();
  return students;
};

export const getContactById = async (contactId) => {
  const student = await StudentsCollection.findById(contactId);
  return student;
};