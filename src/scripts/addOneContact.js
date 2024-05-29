import { PATH_DB } from '../constants/contacts.js';

// export const addOneContact = async () => {};

import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


export const addOneContact = async () => {
    try {
      const data = await fs.readFile(PATH_DB);
      const contacts = JSON.parse(data);
      contacts.push(createFakeContact());
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } catch (error) {
      console.log(error);
    }
  };
  
  await addOneContact();