import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function ProductItemRecord(props) {
  const product = props.product;
  const firstSearch = props.firstSearch;

  const RecordClicked = async () => {
    // console.log(product._id);
    // await axios.post(`http://localhost:19001/stock/delete`, {
    //   params: {
    //     query: product._id,
    //   },
    // });
    // firstSearch();
  };

  return (
    <TouchableOpacity onPress={RecordClicked}>
      <Text style={styles.textNames}>
        Record
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
