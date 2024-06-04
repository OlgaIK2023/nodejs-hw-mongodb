import { getAllcontacts, getContactById, createContact, upsertContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getAllcontactsController = async (req, res) => {
    const contacts = await getAllcontacts();

    res.status(200).json({
      message: 'Successfully found contacts!',
      data: contacts,
    });
  };


  export const getContactByIdController = async (req, res, next) => {
    const contactId = req.params.contactId;
   
    const contact = await getContactById(contactId);

    if (!contact) {
        next(createHttpError(404, 'Contact not found'));
        return;
      }
    
      res.status(200).json({
        message: `Successfully found contact with id ${contactId}`,
        data: contact,
      });
    };
    
    export const createContactController = async (req, res) => {
        
        const contact = await createContact(req.body);
      
        res.status(201).json({
          status: 201,
          message: 'Successfully created a contact!',
          data: contact,
        });
      };


      export const patchContactByIdController = async (req, res, next) => {
        const { body } = req;
        const { contactId } = req.params;
      
        const contact = await upsertContactById(contactId, body);
      
        if (!contact) {
          next(createHttpError(404, 'Student not found'));
          return;
        }
      
        res.status(200).json({
          staus: 200,
          message: `uccessfully patched a contact!`,
          data: contact,
        });
      };
   