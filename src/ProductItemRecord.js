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
    // console.log('isItclicked is', isItClicked);
    // console.log('firstSearch is', firstSearch);
    // console.log('loadFavorites is', loadFavorites);
    // console.log(product._id);
    let current = await axios.get(`http://localhost:19001/stock/getstock`, {
      params: {
        query: product._id,
      },
    });
    console.log('12', current.data[0].record);

    if (!current.data[0].record) {
      await axios.post(`http://localhost:19001/stock/record`, {
        params: {
          query: product._id,
        },
      });
      if (firstSearch) {
        // loadFavorites();
        firstSearch();
      }
      if (loadFavorites) {
        loadFavorites();
      }

      console.log(current.data.record);

    } else {
      await axios.post(`http://localhost:19001/stock/unrecord`, {
        params: {
          query: product._id,
        },
      });
      if (firstSearch) {
        // loadFavorites();
        firstSearch();
      }
      if (loadFavorites) {
        loadFavorites();
      }

      console.log(current.data.record);

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
