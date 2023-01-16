import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import AddProduct from './src/AddProduct';

import { useIsFocused } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={AddProduct} />
    </Tab.Navigator>
  );
}

export default Tabs;