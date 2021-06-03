import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Notes = () => {
  // on mount will load items from Async Storage into items variable in State
  const [items, setItems] = useState('');

  // to store newly created Item
  const [item, setItem] = useState('');

  // on mount will load Notes from Async Storage to Display
  useEffect();
  return (
    <View>
      <Text>Inside Notes Component</Text>
    </View>
  );
};
