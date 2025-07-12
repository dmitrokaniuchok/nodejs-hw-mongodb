import express from 'express';
import {
  getContacts,
  getContactByIdController,
  createNewContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContacts));
router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(createNewContactController));

router.patch('/:contactId', ctrlWrapper(updateContactController));

router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;
