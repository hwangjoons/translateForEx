import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function ProductItem(props) {
  const product = props.product;
  const firstSearch = props.firstSearch;
  const loadFavorites = props.loadFavorites;

  const deleteClicked = async () => {
    // console.log(product._id);
    await axios.post(`http://localhost:19001/stock/delete`, {
      params: {
        query: product._id,
      },
    });
    if (firstSearch) {
      firstSearch();
    }
    if (loadFavorites) {
      loadFavorites();
    }
  };

  return (
    <TouchableOpacity onPress={deleteClicked}>
      <Text style={styles.textNames}>
        Delete
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textNames: {
    color: '#e55451'
  },
  textItalic: {
    fontStyle: 'italic'
  }
});
