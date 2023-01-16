const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('../config.js');
const morgan = require('morgan');
const db = require('../database');

const PORT = config.PORT || 19001;

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// var productRoutes = require('./productRoutes.js');
var stockRoutes = require('./stockRoutes.js');
// var currencyRoutes = require('./currencyRoutes.js');

// app.use('/products', productRoutes);

app.use('/stock', stockRoutes);

// app.use('/currency', currencyRoutes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));