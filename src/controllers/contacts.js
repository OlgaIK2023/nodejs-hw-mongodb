import { getAllcontacts, getContactById } from '../services/contacts.js';
import mongoose from 'mongoose';

export const getAllcontactsController = async (req, res) => {
    const contacts = await getAllcontacts();

    res.status(200).json({
      message: 'Successfully found contacts!',
      data: contacts,
    });
  };


  export const getContactByIdController = async (req, res) => {
    const contactId = req.params.contactId;
    try {
      const contact = await getContactById(contactId);

      if (!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(404).json({
          message: `There is no contact with id ${contactId}`,
       } );
      }

      else if (!contact) {
        return res.status(404).json({
          message: `There is no contact with id ${contactId}`,
        });
      }
      res.status(200).json({
        message: `Successfully found contact with id ${contactId}`,
        data: contact,
      });
    } catch (error) {
      console.error('Error occurred while fetching contact:', error);
      return res.status(404).json({
        message: `There is no contact with id ${contactId}`,
      });
    }
  };