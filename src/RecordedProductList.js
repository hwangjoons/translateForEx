import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

import ProductItem from './ProductItem.js';

export default function RecordedProductList(props) {
  const products = props.products;
  const clicked = props.clicked;
  const productView = props.productView;
  const firstSearch = props.firstSearch;
  const loadFavorites = props.loadFavorites;

  return (
    // <ScrollView>
      <ScrollView>
        {products.map((product, index) => (
          <ProductItem product={product} key={index} clicked={clicked} productView={productView} firstSearch={firstSearch} loadFavorites={loadFavorites}
          />
        ))}
      </ScrollView>
    // </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#E5BA73',
    // alignItems: 'center',
    justifyContent: 'start',
  },
});
