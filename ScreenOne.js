import React from 'react';
import {View, Text, Button} from 'react-native';

export const ScreenOne = ({navigation}) => {
  return (
    <View>
      <Text>ScreenOne</Text>
      <Button
        title="Button"
        onPress={() => {
          navigation.navigate('ScreenTwo');
        }}
      />
    </View>
  );
};
