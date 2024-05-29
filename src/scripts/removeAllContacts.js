import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        
        await fs.writeFile(PATH_DB, '[]', 'utf8');
        console.log('All contacts removed successfully.');
      } catch (err) {
        console.error('Error removing contacts:', err);
      }
};

await removeAllContacts();
