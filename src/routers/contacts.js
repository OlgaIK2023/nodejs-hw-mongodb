import { Router } from 'express';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';

import {
  getAllcontactsController,
  getContactByIdController,
  createContactController,
  patchContactByIdController,
  deleteContactController,
} from '../controllers/contacts.js';

const router= Router();

router.get('/', ctrlWrapper(getAllcontactsController));

router.get(
  '/contacts/:contactId',
  ctrlWrapper(getContactByIdController),
);

router.patch(
  '/contacts/:contactId', validateBody(updateContactSchema),
  ctrlWrapper(patchContactByIdController),
);

router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController),
);

export default router;
