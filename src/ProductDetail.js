import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, ScrollView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductCurrencyList from './ProductCurrencyList.js';
import ProductCryptoList from './ProductCryptoList.js';

export default function ProductDetail(props) {
  const product = props.currentProduct;
  const currency = props.currentCurrency;
  const crypto = props.currentCrypto;
  // const loadFavorites = props.loadFavorites;

  // console.log(currency);

  return (
    <View style={styles.bigcontainer}>
        <Text style={styles.title}>
          {product.ticker}
        </Text>
        <Text style={styles.priceTitle}>
          Price: ${Math.round(product.closing_price * 100) / 100}
        </Text>
        <Text style={styles.asOf}>
          as of {product.date}
        </Text>
        <View style={styles.container}>
          <ProductCurrencyList currencies={currency} product={product} style={styles.bin1} />
          <ProductCryptoList cryptos={crypto} product={product} style={styles.bin2} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2DDCC'
  },
  container: {
    flex: 1,
    // backgroundColor: '#C58940',
    // alignSelf: 'flex-start',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // height: 100,
    // width: '75%'
  },
  textContainer: {
    size: '100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 12,
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
    marginTop: 12,
    marginBottom: 12,
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
  asOf: {
    fontSize: 20,
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
});
