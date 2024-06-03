import { Router} from 'express';


import { getAllcontactsController, getContactByIdController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', getAllcontactsController);

contactsRouter.get('/contacts/:contactId', getContactByIdController);

export default contactsRouter;
