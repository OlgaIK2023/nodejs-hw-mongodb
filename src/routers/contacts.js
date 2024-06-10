import { Router } from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validationcontacts.js';

import {
  getAllcontactsController,
  getContactByIdController,
  createContactController,
  patchContactByIdController,
  deleteContactController,
} from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllcontactsController));

contactsRouter.get(
  '/contacts/:contactId',
  ctrlWrapper(getContactByIdController),
);

contactsRouter.patch(
  '/contacts/:contactId', validateBody(updateContactSchema),
  ctrlWrapper(patchContactByIdController),
);

contactsRouter.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));

contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
