const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('../config.js');

const PORT = config.PORT || 19001;

const app = express();

app.use(cors());
app.use(express.json());

var productRouter = require('./productRoutes.js');

app.use('/products', productRouter);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));