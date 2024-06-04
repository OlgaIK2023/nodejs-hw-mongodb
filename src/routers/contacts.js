import { Router} from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';

import { getAllcontactsController, getContactByIdController, createContactController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllcontactsController));

contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));



contactsRouter.post('/contacts', ctrlWrapper(createContactController));

export default contactsRouter;