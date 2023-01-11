import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function ProductItem({product}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Name: {product.productName},
        Price: {product.productPrice}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 10,
  },
});
