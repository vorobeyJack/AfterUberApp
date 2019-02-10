import express from 'express';
import {getRoutesHandlers} from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import {normalizePort} from './helpers/http';
import {log} from './helpers/logger';

const app = express();
const router = express.Router();

const port = normalizePort(process.env.PORT || 5000);
app.set('port', port);

// error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: err.message,
        status: err.status
    });
    log(err.message);
    next();
});

/** set up routes {API Endpoints} */
getRoutesHandlers(router);

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
