import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function CryptoItem({crypto}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>
          <Text style={styles.textBold}>1 {crypto[0]}</Text> : ${Math.round(1 / crypto[1] * 10000) / 10000 }
          {/* Price: {product.productPrice} */}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    height: 0.5,
  },
  textBold: {
    fontWeight: 'bold'
  }
});
