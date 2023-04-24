import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import databaseConnection from './Database/db.js';

const app = express();

app.use(cors());
app.use('/', router);

const port = 8000;

databaseConnection();

app.listen(port, () => console.log(`server is running on port ${port}`));