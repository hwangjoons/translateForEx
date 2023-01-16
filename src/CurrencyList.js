import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import CurrencyItem from './CurrencyItem.js';

export default function CurrencyList({currencies}) {

  return (
    <SafeAreaView style={styles.container}>
      {currencies.map((currency, index) => (
        <CurrencyItem currency={currency} key={index}
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
    height: 250
  },
});
