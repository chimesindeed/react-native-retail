import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Notes = () => {


  sampleNotesArray = [
  {title: "Note1Title", body: "Note1Body"},
  {title: "Note2Title", body: "Note2Body"},
  {title: "Note13Title", body: "Note3Body"},
  {title: "Note4Title", body: "Note4Body"},
  {title: "Note5Title", body: "Note5Body"}, ]

  setNotesToState(notes) {
    notes.map((note)=>{
      
    })

  }
  // on mount will load items from Async Storage into items variable in State
  const [items, setItems] = useState('');

  // to store newly created Item
  const [item, setItem] = useState('');

  // on mount will load Notes from Async Storage to Display
  useEffect(
    setItemsToState(sampleNotesArray));
  return (
    <View>
      <Text>Inside Notes Component</Text>
    </View>
  );
};
