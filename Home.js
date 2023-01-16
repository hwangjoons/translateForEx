import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import * as React from 'react';

import ProductList from './src/ProductList.js';
import CurrencyList from './src/CurrencyList.js';
import CryptoList from './src/CryptoList.js';
import ProductDetail from './src/ProductDetail.js';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useIsFocused } from '@react-navigation/native';

import { Formik } from 'formik';

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCurrency, setAllCurrency] = useState([]);
  const [allCrypto, setAllCrypto] = useState([]);
  const [productClicked, setProductClicked] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [tempProducts, setTempProducts] = useState([]);

  const isFocused = useIsFocused();

  console.log("App executed", productClicked);

  const firstSearch = async () => {
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

      // console.log(product.data[0]);
      let stocksArr = [];
      for (let i = 0; i < product.data.length; i++) {
        stocksArr.push(product.data[i]);
        // console.log(product.data[i], '69');
      }

      // console.log(productArr);
      setAllCurrency(currencyArray);
      setAllCrypto(cryptoArray);

      setAllProducts(stocksArr);
      setTempProducts(stocksArr);
    } catch (err) {
      console.log('this is an error', err);
    }
  }
  useEffect(() => {
      firstSearch();
  }, [isFocused]);

  const productView = (productInfo) => {
    // console.log(productInfo, '123');
    setProductClicked(true);
    setCurrentProduct(productInfo);
  };

  const searchKeyWord = (query) => {
    if (query.search.length === 0) {
      setAllProducts(tempProducts);
      firstSearch();
    }
    let capitalized = query.search.toUpperCase();
    let searchArr = [];

    for (let i = 0; i < allProducts.length; i++) {
      let currentTicker = allProducts[i];
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
    setAllProducts(searchArr);
  };

  if (!productClicked) {
    return (
      <View style={styles.bigcontainer}>
        <View style={styles.currencyPart}>
          <Text style={styles.titleText}>Currency</Text>
          <SafeAreaView style={styles.container}>
              <CurrencyList currencies={allCurrency} style={styles.bin1}/>
            <CryptoList cryptos={allCrypto} style={styles.bin2}/>
            {/* <Image source={require('./assets/icon.png')} /> */}
          </SafeAreaView>
        </View>
        <Text style={styles.titleText}>Stocks</Text>
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
          {/* <SafeAreaView> */}
            <ProductList productView={productView} clicked={productClicked} products={allProducts} firstSearch={firstSearch} />
          {/* </SafeAreaView> */}
          </ScrollView>
        </SafeAreaProvider>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.bigcontainer}>
        <Button
          onPress={() => setProductClicked(false)}
          title="Back"
          color="Black"
        >Back</Button>
        <ProductDetail currentProduct={currentProduct} currentCurrency={allCurrency} currentCrypto={allCrypto} />
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column'
  },
  container: {
    flex: 1,
    backgroundColor: '#F2DDCC',
    // alignSelf: 'flex-start',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#C58940',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    // marginHorizontal: 20,

  },
  bin1: {
    flex: 1,
    // backgroundColor: '#E5BA73',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  bin2: {
    flex: 2,
    // backgroundColor: '#FAEAB1',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginBottom: 10,
    fontSize: 25
  },
  scroll: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 4,
    // borderColor: 'white',
  },
  currencyPart: {
    // marginTop: 50,
    marginTop: 10,
    width: '100%',
    flex: 1,
    backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
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
  searchContainer: {
    flexDirection: 'row',
  }
});


