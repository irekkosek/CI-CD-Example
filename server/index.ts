import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let count = 0;

app.get('/api/count', (req: Request, res: Response) => {
  count++;
  res.send({ count });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});