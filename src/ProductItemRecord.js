import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import {useState, useEffect} from 'react';

import axios from 'axios';

export default function ProductItemRecord(props) {
  const [isItClicked, setIsItClicked] = useState(false);

  const product = props.product;
  const firstSearch = props.firstSearch;
  const loadFavorites = props.loadFavorites;
  // console.log(loadFavorites);

  const RecordClicked = async () => {
    // console.log(product._id);
    if (!isItClicked) {
      await axios.post(`http://localhost:19001/stock/record`, {
        params: {
          query: product._id,
        },
      });
    } else if (isItClicked) {
      await axios.post(`http://localhost:19001/stock/unrecord`, {
        params: {
          query: product._id,
        },
      });
    }
    if (firstSearch) {
      firstSearch();
    }
    if (loadFavorites) {
      loadFavorites();
    }

    setIsItClicked(!isItClicked);
  };

  return (
    <TouchableOpacity onPress={RecordClicked}>
      <Text style={styles.textNames}>
        {product.record ? <Text>Recorded</Text> : <Text>Record</Text>}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textNames: {
    color: '#789e9e'
  },
  textItalic: {
    fontStyle: 'italic'
  }
});
