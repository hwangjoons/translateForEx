import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import ProductCryptoItem from './ProductCryptoItem.js';

export default function ProductCryptoList({cryptos, product}) {

  return (
    <SafeAreaView style={styles.container}>
      {cryptos.map((crypto, index) => (
        <ProductCryptoItem crypto={crypto} product={product} key={index}
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
