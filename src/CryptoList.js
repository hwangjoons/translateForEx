import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import CryptoItem from './CryptoItem.js';

export default function CryptoList({cryptos}) {

  return (
    <SafeAreaView style={styles.container}>
      {cryptos.map((crypto, index) => (
        <CryptoItem crypto={crypto} key={index}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250
  },
});
