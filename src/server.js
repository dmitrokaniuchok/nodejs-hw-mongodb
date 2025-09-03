import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { getContacts } from './controllers/contactsController.js';
import { getContactByIdController } from './controllers/getContactById.js';

const PORT = process.env.PORT || 3000;

export function setupServer() {
  const app = express();

  app.use(cors());
  app.use(pino());

  app.get('/contacts', getContacts);
  app.get('/contacts/:contactId', getContactByIdController);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Server started on port ${PORT}`);
  });
}
