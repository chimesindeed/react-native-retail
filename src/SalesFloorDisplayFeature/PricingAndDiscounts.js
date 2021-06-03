import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Colors} from './ColorComponents/Colors';
import {Books, Media, LineDivider} from './Media';
const styles = StyleSheet.create({
  colorsView: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 2,
    paddingTop: 3,
    marginLeft: 30,
    paddingLeft: 10,
    paddingRight: 20,
    width: 290,
    height: 200,
    backgroundColor: '#778899',
  },
  mediaView: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 2,
    paddingTop: 3,
    paddingLeft: 5,
    marginLeft: 10,
    width: 330,
    height: 200,
    backgroundColor: '#778899',
  },

  containerView: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: 662,
    marginTop: -150,
    marginLeft: -15,
  },

  PricingAndDiscountsHeader: {
    alignSelf: 'flex-start',
    fontSize: 23,
    textDecorationLine: 'underline',
    letterSpacing: 1,
    fontWeight: '700',
    marginBottom: 18,
    marginTop: -200,
    marginLeft: 180,
  },
});

const PricingAndDiscountsHeader = () => {
  return (
    <View>
      <Text style={styles.PricingAndDiscountsHeader}>Pricing & Discounts</Text>
    </View>
  );
};

export const PricingAndDiscounts = () => {
  const handleNotes = () => {};
  return (
    <View>
      <PricingAndDiscountsHeader />
      <View style={styles.containerView}>
        <ScrollView horizontal={true}>
          <View style={styles.colorsView}>
            <Colors />
          </View>

          <View style={styles.mediaView}>
            <Books />
            <LineDivider />
            <Media />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
