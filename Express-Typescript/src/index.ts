import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routes/user';

const app = express();

app.use('/api/users', usersRouter);

const port = 3000;



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})