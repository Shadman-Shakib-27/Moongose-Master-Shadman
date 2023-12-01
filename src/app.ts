import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application Route
app.use('/api/v1', router);

const getAconstant = (req: Request, res: Response) => {
  res.send('Welcome To Ph University Management.');
};

app.get('/', getAconstant);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
