import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';

import {DiscountsScreen} from './DiscountsScreen';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  appContainer: {
    height: ScreenHeight,
    backgroundColor: 'cornsilk',
  },
});
const SalesFloorDisplayScreen = () => {
  return (
    <View style={styles.appContainer}>
      <DiscountsScreen />
    </View>
  );
};

export default SalesFloorDisplayScreen;
