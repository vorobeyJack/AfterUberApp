const express = require("express");
const routes = require('./routes/');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

let port = process.env.PORT || 5000;

/** set up routes {API Endpoints} */
routes(router);

app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
