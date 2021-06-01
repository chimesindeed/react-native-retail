import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  AppHeader: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 40,
  },

  SALogo: {
    letterSpacing: 1,
    fontWeight: '700',
    color: 'navy',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 44,
  },
  StoreHoursHeader: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'teal',
    marginLeft: 35,
    marginBottom: 1,
    fontSize: 17,
  },
  StoreHours: {
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'teal',
    marginLeft: 35,
    marginBottom: 1,
    fontSize: 16,
  },
  RestroomsHeader: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'black',
    marginTop: 10,
    marginLeft: 100,
    marginBottom: 1,
    fontSize: 17,
  },
  Restrooms: {
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'black',
    marginLeft: 100,
    marginBottom: 1,
    fontSize: 16,
  },

  ExchangePolicyContainer: {
    marginTop: 10,
    marginLeft: 30,
  },

  ExchangePolicyHeader: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginLeft: 60,
    marginBottom: 1,
    fontSize: 17,
  },
  ExchangePolicy: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginLeft: 70,
    marginBottom: 1,
    fontSize: 16,
  },
});

const SALogo = () => {
  return (
    <View>
      <Text style={styles.SALogo}>Salvation Army Retail</Text>
    </View>
  );
};

const StoreDetails = () => {
  return (
    <View>
      <Text style={styles.StoreHoursHeader}>Hours Of Operation:</Text>
      <Text style={styles.StoreHours}>
        Monday - Saturday 10:00 AM - 7:00 PM
      </Text>
      <Text style={styles.RestroomsHeader}>Restrooms:</Text>
      <Text style={styles.Restrooms}>
        {'No Public Restrooms\nDuring The Pandemic'}
      </Text>
      <View style={styles.ExchangePolicyContainer}>
        <Text style={styles.ExchangePolicyHeader}>Exchange Policy:</Text>
        <Text
          style={
            styles.ExchangePolicy
          }>{`All Sales Are Final\nNo Refunds\nNo Exchanges`}</Text>
      </View>
    </View>
  );
};
const AppHeader = () => {
  return (
    <View>
      <View style={styles.AppHeader}>
        <SALogo />
        <StoreDetails />
      </View>
    </View>
  );
};
export default AppHeader;
