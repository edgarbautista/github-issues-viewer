import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import issuesPageRoute from './routes/issues';

const app = express();
const port = process.env.PORT || 5001;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/repos/", issuesPageRoute);

app.get('/', (req, res) => {
  res.send('Nothing here');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

exports = app;
