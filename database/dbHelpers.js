const config = require('../config.js');
const axios = require('axios');
const path = require('path');


module.exports = {
  getAllProducts : (req, res) => {
    axios.get(path.join(config.API_URL, '/latest/currencies/usd.json'))
    .then((data) => {
      console.log(data.data);
      res.send(data.data);
      res.end();
    });
  }
}