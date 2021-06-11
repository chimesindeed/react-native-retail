import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Notes = () => {
  const sampleNotesArray = [
    {title: 'Note1Title', body: 'Note1Body'},
    {title: 'Note2Title', body: 'Note2Body'},
    {title: 'Note13Title', body: 'Note3Body'},
    {title: 'Note4Title', body: 'Note4Body'},
    {title: 'Note5Title', body: 'Note5Body'},
  ];

  const setNotesToState = allNotes => {
    allNotes.map(note => {
      setNotes([...notes, allNotes]);
    });
  };
  // on mount will load items from Async Storage into items variable in State
  const [notes, setNotes] = useState([]);

  // to store nnewly created Item
  const [note, setNote] = useState('');

  // on mount will load Notes from Async Storage to Display
  useEffect(setNotesToState(sampleNotesArray));
  return (
    <View>
      <Text>Inside Notes Component</Text>
    </View>
  );
};
