'use strict';
const PORT = process.env.PORTA_HTTP;
const HOST = '0.0.0.0';

const express = require('express');
const bodyParser = require('body-parser');
const feature_flag = require('./feature_flag.js');

// App
const app = express();
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true, parameterLimit: 500000 }));

//feature_flag
app.get('/feature', feature_flag.getAll);
app.get('/feature/:key', feature_flag.getKey);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);