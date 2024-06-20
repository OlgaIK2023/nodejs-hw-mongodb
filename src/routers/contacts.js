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

import { authenticate } from '../middlewares/authenticate.js';

const router= Router();

router.use('/', authenticate);

router.get('/', ctrlWrapper(getAllcontactsController));

router.get(
  '/:contactId',
  ctrlWrapper(getContactByIdController),
);

router.patch(
  '/:contactId', validateBody(updateContactSchema),
  ctrlWrapper(patchContactByIdController),
);

router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.delete(
  '/:contactId',
  ctrlWrapper(deleteContactController),
);

export default router;
