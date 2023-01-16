import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import ProductItemRecord from './ProductItemRecord.js';
import ProductItemDelete from './ProductItemDelete.js';

export default function ProductItem(props) {
  const product = props.product;
  const clicked = props.clicked;
  const productView = props.productView;
  const key = props.key;
  const firstSearch = props.firstSearch;

  const productClicked = () => {
    productView(product);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={productClicked}>
      <View style={styles.item} >
        <Text>
            Stock:&nbsp;
          <Text style={styles.textNames}>
          {product.ticker}
          </Text>
        </Text>
        <Text>
            Latest Price:&nbsp;
          <Text style={styles.textNames} >
            ${Math.round(product.closing_price * 100) / 100}
          </Text>
          <Text style={styles.textIatlic}>
            &nbsp;as of {product.date}
          </Text>
        </Text>
        <View style={styles.buttons}>
          <ProductItemRecord product={product} firstSearch={firstSearch} />
          <Text>&nbsp;&nbsp;</Text>
          <ProductItemDelete product={product} firstSearch={firstSearch} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#FAEAB1',
    backgroundColor: '#F2DDCC',
    alignItems: 'start',
    justifyContent: 'start',
  },
  item: {
    marginTop: 10,
    padding: 10,
      // alignItems: 'left',
      // justifyContent: 'left',
    backgroundColor: '#F2DDCC',
    fontSize: 24,
    borderWidth: 3,
    // maxWidth: '75',
  },
  textNames: {
    fontWeight: 'bold',
    color: 'green'
  },
  textItalic: {
    fontStyle: 'italic'
  },
  buttons: {
    flexDirection: 'row'
  }
});
