const {header, middlewares} = require('./app/helpers/helper');
const router = require('./app/middlewares/router-handler');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(header);
app.use(fileUpload({}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(middlewares.cors);

router.userAPI(app);

app.use(middlewares.notFound);
app.use(middlewares.error);

module.exports = app;
