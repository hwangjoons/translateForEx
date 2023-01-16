const config = require('../config.js');
const axios = require('axios');
const path = require('path');

const Stock = require('./models/stocks.js');



module.exports = {
  getAllStocks : async (req, res) => {
    try {
      const response = await Stock.find();
      res.status(200).send(response);
      res.end();
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  },
  updateAllStocks : async (req, res) =>  {
    // console.log('test');
    const top50 = ['AAPL', 'MSFT', 'GOOG', 'AMZN', 'BRK.A', 'XOM', 'V', 'UNH', 'JNJ', 'JPM', 'NVDA', 'WMT', 'TSLA', 'MA', 'META', 'PG', 'LLY', 'CVX', 'HD', 'MRK', 'BAC', 'ABBV', 'PFE', 'KO', 'AVGO', 'PEP', 'ORCL', 'TMO', 'COST', 'CSCO', 'NKE', 'DHR', 'ABT', 'MCD', 'ACN', 'DIS', 'VZ', 'WFC', 'CMCSA', 'NEE', 'LIN', 'TXN', 'ADBE', 'PM', 'UPS', 'MS', 'SCHW', 'BMY', 'COP', 'CRM'];
    try {
      for (let i = 0; i <= top50.length; i++) {
        // const response = await axios.get(path.join(config.API_URL, `?function=TIME_SERIES_WEEKLY&symbol=MSFT`));
        // console.log(response.data);
        // console.log('test');
        const options = {
          method: 'GET',
          url: 'https://alpha-vantage.p.rapidapi.com/query',
          params: {
            function: 'TIME_SERIES_DAILY',
            symbol: `${top50[i]}`,
            outputsize: 'compact',
            datatype: 'json'
          },
          headers: {
            'X-RapidAPI-Key': '4d7d8fb30cmshf255fe84052e612p1f1408jsn1a4050c46f0e',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        console.log(response.data['Meta Data']['2. Symbol']);
        console.log(response.data['Time Series (Daily)']['2023-01-13']['4. close']);
        console.log(response.data['Meta Data']['3. Last Refreshed']);

        const addStock = new Stock(
          {
            id: i,
            ticker: response.data['Meta Data']['2. Symbol'],
            closing_price: response.data['Time Series (Daily)']['2023-01-13']['4. close'],
            date: response.data['Meta Data']['3. Last Refreshed'],
          }
        );
        await addStock.save();
        res.end();
      }
    // }
    // res.status(200).send({
    //   message: addStock.data
    // });
    // res.status(200).send(saved);
    // res.end();
    } catch (error) {
      // console.log(error, '123');
      res.status(500).send({ error });
    }
  },
  deleteStock : async (req, res) => {
    // console.log(req.body.params.query);
    try {
      const deleteStock = await Stock.deleteOne({ _id: req.body.params.query })
      res.status(200).send(deleteStock);
      res.end();
    } catch (error) {
      // console.log(error, '123');
      res.status(500).send({ error });
    }
  },
  addStock : async (req, res) => {
    console.log(req.body);
    try {
      const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          function: 'TIME_SERIES_DAILY',
          symbol: `${req.body.params.ticker}`,
          outputsize: 'compact',
          datatype: 'json'
        },
        headers: {
          'X-RapidAPI-Key': '4d7d8fb30cmshf255fe84052e612p1f1408jsn1a4050c46f0e',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      console.log(response);
      const addStock = new Stock(
        {
          // id: i,
          ticker: response.data['Meta Data']['2. Symbol'],
          closing_price: response.data['Time Series (Daily)'][`${req.body.params.date}`]['4. close'],
          date: req.body.params.date,
        }
      );
      await addStock.save();
      const find = await Stock.find({ticker: req.body.ticker, date: req.body.date});
      console.log(find);
      res.status(200).send(find);
      res.end();

      // const addStock = await Stock.insertOne({
      //   ticker: req.body.ticker,
      //   date: req.body.date
      // })
    } catch (error) {
      console.log(error, '123')
      res.status(500).send({ error });
    }
  }
}