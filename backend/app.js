const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const linhaRouter = require('./routes/linha');
const onibusRouter = require('./routes/onibus');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/linha', linhaRouter);
app.use('/api/onibus', onibusRouter);

module.exports = app;
