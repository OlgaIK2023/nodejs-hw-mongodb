import { Router} from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';

import { getAllcontactsController, getContactByIdController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllcontactsController));

contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

export default contactsRouter;
