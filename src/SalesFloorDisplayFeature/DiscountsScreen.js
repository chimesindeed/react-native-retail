import React from 'react';
import {View} from 'react-native';
import AppHeader from './Headers/AppHeader';
import {PricingAndDiscounts} from './PricingAndDiscounts';

export const DiscountsScreen = () => {
  return (
    <View>
      <AppHeader />
      <PricingAndDiscounts />
    </View>
  );
};
