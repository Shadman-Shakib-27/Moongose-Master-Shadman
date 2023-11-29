import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.router';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application Route
app.use('/api/v1/students', StudentRoutes);

const getAconstant = (req: Request, res: Response) => {
  res.send('Hello Fucking World!!!');
};

app.get('/', getAconstant);

export default app;
