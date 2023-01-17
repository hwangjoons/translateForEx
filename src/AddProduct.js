import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import ProductCurrencyList from './ProductCurrencyList.js';
// import ProductCryptoList from './ProductCryptoList.js';

import { Formik } from 'formik';

import axios from 'axios';

export default function AddProduct() {

  const addNewStock = async (values) => {
    // console.log(values);
    let capitalized = values.ticker.toUpperCase();
    await axios.post(`http://localhost:19001/stock/add`, {
      params: {
        ticker: capitalized,
        date: values.date
      }
    })


  };

  return (
    <View style={styles.bigcontainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik
        initialValues={{
          ticker: '',
          date: ''
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addNewStock(values);
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder='Stock ticker'
              onChangeText={props.handleChange('ticker')}
              value={props.values.ticker}
            />
            <TextInput
              style={styles.input}
              placeholder='Stock price date (YYYY-MM-DD)'
              onChangeText={props.handleChange('date')}
              value={props.values.date}
              keyboardType='numeric'
            />

            <Button title='submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    // backgroundColor: '#f2ddcc',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    height: 40,
    width: '80%',
    margin: 3
  },
  container: {
    flex: 1,
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 4,
  },
  textContainer: {
    size: '100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    // borderBottom: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    // backgroundColor: '#C58940',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  priceTitle: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    // borderWidth: 4,
    // borderColor: '#20232a',
    borderRadius: 6,
    // backgroundColor: '#C58940',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bin1: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  bin2: {
    flex: 2,
    // backgroundColor: '#FAEAB1',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
