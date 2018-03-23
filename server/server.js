const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));

module.exports = app;
