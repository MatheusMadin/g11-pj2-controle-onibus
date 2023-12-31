const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const linhaRouter = require('./routes/linha');
const onibusRouter = require('./routes/onibus');
const passageiroRouter = require('./routes/passageiro');
const motoristaRouter = require('./routes/motorista');
const usuarioRouter = require('./routes/usuario')
const catracaRouter = require('./routes/catraca');
const tarifaRouter = require('./routes/tarifa');

const app = express();
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

app.use('/api/linha', linhaRouter);
app.use('/api/onibus', onibusRouter);
app.use('/api/passageiro', passageiroRouter);
app.use('/api/motorista', motoristaRouter);
app.use('/api/catraca', catracaRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/tarifa', tarifaRouter);

module.exports = app;
