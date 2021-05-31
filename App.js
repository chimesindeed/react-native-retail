import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOne} from './ScreenOne';
import {ScreenTwo} from './ScreenTwo';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
