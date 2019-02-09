import express from 'express';
import {getRoutesHandlers} from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const router = express.Router();

let port = process.env.PORT || 5000;

/** set up routes {API Endpoints} */
getRoutesHandlers(router);

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
