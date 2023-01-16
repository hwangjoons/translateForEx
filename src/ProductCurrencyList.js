import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import ProductCurrencyItem from './ProductCurrencyItem.js';

export default function ProductCurrencyList({currencies, product}) {

  return (
    <SafeAreaView style={styles.container}>
      {currencies.map((currency, index) => (
        <ProductCurrencyItem currency={currency} product={product} key={index}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5BA73',
    alignItems: 'center',
    justifyContent: 'center',
    height: 550
  },
});
