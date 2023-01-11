import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import {useState} from 'react';

import ProductList from './src/ProductList.js';

export default function App() {

  console.log("App executed");

  const [allProducts, setAllProducts] = useState([
    {
      productName: 'pizza',
      produtPrice: 5
    },
    {
      productName: 'onion',
      productPrice: 2
    }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, World</Text>
      {/* <Image source={require('./assets/icon.png')} /> */}
      <ProductList products={allProducts}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
