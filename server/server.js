const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
