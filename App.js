import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import * as React from 'react';

import ProductList from './src/ProductList.js';
import CurrencyList from './src/CurrencyList.js';
import CryptoList from './src/CryptoList.js';
import ProductDetail from './src/ProductDetail.js';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { StackNavigator } from 'react-navigation';

import Tabs from './Tabs';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{ headerShown: false }} name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column'
  },
  container: {
    flex: 1,
    backgroundColor: '#F2DDCC',
    // alignSelf: 'flex-start',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#C58940',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    // marginHorizontal: 20,

  },
  bin1: {
    flex: 1,
    // backgroundColor: '#E5BA73',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  bin2: {
    flex: 2,
    // backgroundColor: '#FAEAB1',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginBottom: 10,
    fontSize: 25
  },
  scroll: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  currencyPart: {
    marginTop: 50,
    width: '100%',
    flex: 1,
    backgroundColor: '#F2DDCC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
  }
});


