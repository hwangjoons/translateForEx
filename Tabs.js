import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import AddProduct from './src/AddProduct';
import RecordedProducts from './src/RecordedProducts';

import { useIsFocused } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused? 'ios-home-sharp': 'ios-home-outline';
          } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'ios-add-circle-sharp': 'ios-add-circle-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#C58940',
      tabBarInactiveTintColor: 'gray',
      //Tab bar styles can be added here
      tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'white',position:'absolute',height:75},
      tabBarLabelStyle:{paddingBottom:3},
  })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={AddProduct} />
      <Tab.Screen name="Favorites" component={RecordedProducts} />
    </Tab.Navigator>
  );
}

export default Tabs;