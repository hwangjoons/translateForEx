import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function ProductCryptoItem({crypto, product}) {

  let conversion = product.closing_price * crypto[1];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.fontSize}>
          {crypto[0]} : <Text style={styles.textBold}>{Math.round(conversion * 100) / 100 > 0 ? Math.round(conversion * 100) / 100 : conversion}</Text>
          {/* Price: {product.productPrice} */}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAEAB1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 0.5,
  },
  fontSize: {
    fontSize: 17
  },
  textBold: {
    fontWeight: 'bold'
  }
});
