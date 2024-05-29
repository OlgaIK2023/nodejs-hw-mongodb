import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        // Read the contacts from the database file
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);
    
        // Randomly delete half of the contacts
        contacts = contacts.filter(() => Math.random() > 0.5);
    
        // Write the updated contacts back to the database file
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    
        console.log('Thanos snapped his fingers. Half of the contacts are gone.');
      } catch (err) {
        console.error('Error deleting contacts:', err);
      }
};

await thanos();
