const config = require('../config.js');
const axios = require('axios');
const path = require('path');
// const config = require('../config.profile.js');

const Product = require('./models/products.js');


module.exports = {
  // getAllCurrency : (req, res) => {
  //   axios.get(path.join(config.API_URL, '/latest/currencies/usd.json'))
  //   .then((data) => {
  //     console.log(data.data);
  //     res.send(data.data);
  //     res.end();
  //   });
  // }

  getAllProducts : async (req, res) =>  {
    try {
      const response = await Product.find();
      res.status(200).send(response);
      res.end();
    // for (let i = 1; i <= 10; i++) {
    //   const response = await axios.get(path.join(config.API_URL, `${i}`));
    //   console.log(response.data);

    //   const product = new Product(
    //     {
    //       id: response.data.id,
    //       title: response.data.title,
    //       price: response.data.price,
    //       description: response.data.description,
    //       image: response.data.image
    //     }
    //   );
    //   await product.save();
    //   res.end();
    // }

    // res.status(200).send({
    //   message: addToDB.data
    // });
    // console.log(addToDB);
    // res.end();

    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
    // res.status(200).send({
    //   message: response.data
    // })

  },

  // addProducts : (req, res) => {
  //   return Product.create(
  //     {
  //       id: req.params.id,
  //       title: req.params.title,
  //       price: req.params.price,
  //       description: req.params.description,
  //       image: req.params.image
  //     }
  //   );
  // }
}