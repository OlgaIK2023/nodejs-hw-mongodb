import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';


// setupServer();

const bootstrap = async () => {
    await initMongoConnection();
    setupServer();
  };
  
  bootstrap();