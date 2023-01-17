import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, Button, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';
import RecordedProductList from './RecordedProductList.js';

import { useIsFocused } from '@react-navigation/native';

import axios from 'axios';

import { Formik } from 'formik';

import ProductDetail from './ProductDetail.js';

export default function RecordedProducts() {
  const [allCurrency, setAllCurrency] = useState([]);
  const [allCrypto, setAllCrypto] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [tempFavoriteProducts, setTempFavoriteProducts] = useState([]);
  const isFocused = useIsFocused();
  const [productClicked, setProductClicked] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const loadFavorites = async () => {
    try {
      const favorites = await axios.get(`http://localhost:19001/stock/getrecord`);
      // console.log(favorites[0].ticker);

      let favoriteStocksArr = [];
      for (let i = 0; i < favorites.data.length; i++) {
        favoriteStocksArr.push(favorites.data[i]);
      }

      setFavoriteProducts(favoriteStocksArr);
      setTempFavoriteProducts(favoriteStocksArr);
    } catch (error) {
      console.log('this is an error', error);
    }
  };

  const productView = (productInfo) => {
    // console.log(productInfo, '123');
    setProductClicked(true);
    setCurrentProduct(productInfo);
  };

  useEffect(() => {
    loadFavorites();
  }, [isFocused]);

  useEffect(() => {
    searchCurrency();
  }, [productClicked]);

  const searchKeyWord = (query) => {
    if (query.search.length === 0) {
      setFavoriteProducts(tempFavoriteProducts);
      loadFavorites();
    }
    let capitalized = query.search.toUpperCase();
    let searchArr = [];

    for (let i = 0; i < favoriteProducts.length; i++) {
      let currentTicker = favoriteProducts[i];
      if (currentTicker.ticker.includes(capitalized)) {
        searchArr.push(currentTicker);
      }
      if (currentTicker.date.includes(capitalized)) {
        searchArr.push(currentTicker);
      }
      if (currentTicker.closing_price.includes(capitalized)) {
        searchArr.push(currentTicker);
      }
    }
    setFavoriteProducts(searchArr);
  };

  const searchCurrency = async () => {
    try {
      const forex = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
      const product = await axios.get(`http://localhost:19001/stock`)

      // console.log(forex.data.usd);
      let currencyArray = [];
      currencyArray.push(['Australian Dollar', forex.data.usd.aud]);
      currencyArray.push(['Canadian Dollar', forex.data.usd.cad]);
      currencyArray.push(['Swiss Franc', forex.data.usd.chf]);
      currencyArray.push(['Chinese Yuan', forex.data.usd.cny]);
      currencyArray.push(['Euro', forex.data.usd.eur]);
      currencyArray.push(['Great Britain Pound', forex.data.usd.gbp]);
      currencyArray.push(['Japanese Yen', forex.data.usd.jpy]);
      currencyArray.push(['New Zealand Dollar', forex.data.usd.nzd]);
      currencyArray.push(['Swedish Krona', forex.data.usd.sek]);
      currencyArray.push(['Korean Won', forex.data.usd.krw]);


      let cryptoArray = [];
      cryptoArray.push(['Bitcoin', forex.data.usd.btc]);
      cryptoArray.push(['Ethereum', forex.data.usd.eth]);
      cryptoArray.push(['BNB', forex.data.usd.bnb]);
      cryptoArray.push(['XRP', forex.data.usd.xrp]);
      cryptoArray.push(['Cardano', forex.data.usd.ada]);
      cryptoArray.push(['Dogecoin', forex.data.usd.doge]);
      cryptoArray.push(['Polygon', forex.data.usd.matic]);
      cryptoArray.push(['Litecoin', forex.data.usd.ltc]);
      cryptoArray.push(['Solana', forex.data.usd.sol]);
      cryptoArray.push(['Polkadot', forex.data.usd.dot]);

      // // console.log(product.data[0]);
      // let stocksArr = [];
      // for (let i = 0; i < product.data.length; i++) {
      //   stocksArr.push(product.data[i]);
      //   // console.log(product.data[i], '69');
      // }

      // console.log(productArr);
      setAllCurrency(currencyArray);
      setAllCrypto(cryptoArray);

      // setAllProducts(stocksArr);
      // setTempProducts(stocksArr);
    } catch (err) {
      console.log('this is an error', err);
    }
  }

  if (!productClicked) {
    return (
      <View style={styles.bigcontainer}>
          <Formik
            initialValues={{
              search: ''
            }}
            onSubmit={(values, actions) => {
              actions.resetForm();
              searchKeyWord(values);
            }}
          >
            {(props) => (
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder='Search...'
                  onChangeText={props.handleChange('search')}
                  value={props.values.search}
                />
                <Button title='submit' color='#276359' onPress={props.handleSubmit} />
              </View>
            )}

          </Formik>
        <SafeAreaProvider style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <RecordedProductList productView={productView} clicked={productClicked} products={favoriteProducts} loadFavorites={loadFavorites} />
          </ScrollView>
        </SafeAreaProvider>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.bigcontainerProduct}>
      <Button
        onPress={() => setProductClicked(false)}
        title="Back"
        color="Black"
      >Back</Button>
      <ProductDetail currentProduct={currentProduct} currentCurrency={allCurrency} currentCrypto={allCrypto} />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column'
  },
  bigcontainerProduct: {
    flex: 1,
    backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    height: 40,
    width: '80%',
    margin: 3
  },
  container: {
    flex: 1,
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 4,
  },
  textContainer: {
    size: '100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    // borderBottom: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    // backgroundColor: '#C58940',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  priceTitle: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    // borderWidth: 4,
    // borderColor: '#20232a',
    borderRadius: 6,
    // backgroundColor: '#C58940',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bin1: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  bin2: {
    flex: 2,
    // backgroundColor: '#FAEAB1',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    height: 40,
    width: '50%',
    margin: 3
  },
  titleText: {
    marginBottom: 10,
    fontSize: 25
  },
});
