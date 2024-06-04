import { Router} from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';

import { getAllcontactsController, getContactByIdController, createContactController, patchContactByIdController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllcontactsController));

contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

contactsRouter.patch('/contacts/:contactId', ctrlWrapper(patchContactByIdController));

contactsRouter.post('/contacts', ctrlWrapper(createContactController));

export default contactsRouter;