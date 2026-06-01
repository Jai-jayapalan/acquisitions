import dotenv from 'dotenv';

dotenv.config({
  path: '.env.development',
});

import app from './app.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
