import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from "dotenv";
import { env } from './utils/env.js';
import { getAllcontacts, getContactById } from './services/contacts.js';

dotenv.config();

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // app.get('/', (req, res) => {
  //   res.json({
  //     message: 'Hello world!',
  //   });
  // });

  // app.use('*', (req, res, next) => {
  //   res.status(404).json({
  //     message: 'Not found',
  //   });
  //   next();
  // });

  


  app.get('/contacts', async (req, res) => {
    const contacts = await getAllcontacts();

    res.status(200).json({
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get('/contacts/:contactId', async (req, res) => {
    const contactId = req.params.contactId;
    try { 
    const contact = await getContactById(contactId);
    if (!contact) {
        return res.status(404).json({
            message: `There is no contact with id ${contactId}`,
        });
        };
        res.status(200).json({
        message: `Successfully found contact with id ${contactId}`,
        data: contact,
    });
    } catch(error) {
         return res.status(404).json({
            message: `There is no contact with id ${contactId}`,
        });
    }
});

app.use('*', (req, res) => {
  res.status(404).json({
      message: 'Not found',
  });
});


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  

};

