import React, {useState, useEffect, useRef} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

import cheerio from 'cheerio-without-node-native';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  appContainer: {
    height: ScreenHeight,
    backgroundColor: 'cornsilk',
  },
  inputBox: {
    width: 60,
    height: 37,
    paddingTop: 10,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
});

export const StoreLocatorScreen = () => {
  const input = React.createRef();

  const clearInput = () => {
    input.current.clear();
  };

  const [zipCodeInput, setZipCodeInput] = useState('');

  const handleChangeInputBox = e => {
    setZipCodeInput(e);
  };

  const querySite = () => {
    return 'a';
  };
  return (
    <View style={styles.appContainer}>
      <Text>`Zip Code: ${zipCodeInput}`</Text>
      <TextInput
        ref={input}
        style={styles.inputBox}
        onChangeText={handleChangeInputBox}
        keyboardType="numeric"
      />
      <View>
        <Button title="update" onPress={querySite} />
      </View>
    </View>
  );
};
