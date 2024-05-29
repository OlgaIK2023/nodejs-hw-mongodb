import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        // Read the contacts from the database file
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        
        // Return the number of contacts
        return contacts.length;
      } catch (err) {
        console.error('Error reading database file:', err);
        return 0;
      }
};

console.log(await countContacts());
