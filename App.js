import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOne} from './ScreenOne';
import {SalesFloorDisplayScreen} from './SalesFloorDisplayFeature';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen
          name="SalesFloorDisplayScreen"
          component={SalesFloorDisplayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
