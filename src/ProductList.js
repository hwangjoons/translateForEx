import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import ProductItem from './ProductItem.js';

export default function ProductList({products}) {

  return (
    <SafeAreaView style={styles.container}>
      {products.map((product, index) => (
        <ProductItem product={product} key={index}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
