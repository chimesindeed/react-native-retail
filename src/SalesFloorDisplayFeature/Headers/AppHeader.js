import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  StoreAddress1,
  StoreAddress2,
  StorePhoneNumber,
  DeliveryPeople,
  InstagramLink,
} from '../../App';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  logoAndAddressContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    marginBottom: 20,
  },
  SALogo: {
    letterSpacing: 1,
    fontWeight: '700',
    color: 'navy',
    fontSize: 44,
    marginBottom: -7,
  },

  addressContainer: {
    flexDirection: 'row',
  },

  addressText: {
    color: 'navy',
    paddingRight: 7,
    fontSize: 12,
  },
  phoneText: {
    fontSize: 14,
    marginTop: -2,
    marginLeft: 5,
    color: 'maroon',
    textDecorationLine: 'underline',
  },

  rightsideHeader: {
    alignSelf: 'flex-end',
  },
  storeHoursContainer: {
    flexDirection: 'column',
    marginRight: 20,
  },
  storeHoursHeader: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'teal',
    marginBottom: 1,
    fontSize: 17,
  },
  storeHours: {
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'teal',
    marginBottom: 1,
    fontSize: 16,
  },
  restroomsContainer: {
    flexDirection: 'column',
    marginLeft: 90,
  },

  restroomsHeader: {
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'black',
    marginTop: 10,
    marginBottom: 1,
    fontSize: 17,
  },
  restrooms: {
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'black',
    marginBottom: 1,
    fontSize: 16,
  },

  exchangePolicyContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    marginTop: 20,
  },

  exchangePolicyHeader: {
    textDecorationLine: 'underline',
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginBottom: 1,
    marginRight: 55,
    fontSize: 17,
  },
  exchangePolicy: {
    letterSpacing: 1,
    fontWeight: '700',
    color: 'red',
    marginBottom: 1,
    fontSize: 16,
  },
});

const SALogo = () => {
  return (
    <View>
      <Text style={styles.SALogo}>S.A. Retail Hub</Text>
    </View>
  );
};

const StoreAddress = () => {
  const [storeAddress1, setStoreAddress1] = useContext(StoreAddress1);
  const [storeAddress2, setStoreAddress2] = useContext(StoreAddress2);
  const [storePhone, setStorePhone] = useContext(StorePhoneNumber);
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.addressText}>{storeAddress1}</Text>
      <Text style={styles.addressText}>{storeAddress2}</Text>
      <Text style={styles.phoneText}>{storePhone}</Text>
    </View>
  );
};
const StoreDetails = () => {
  return (
    <View style={styles.rightsideHeader}>
      <View style={styles.storeHoursContainer}>
        <Text style={styles.storeHoursHeader}>Hours Of Operation:</Text>
        <Text style={styles.storeHours}>
          Monday - Saturday 10:00 AM - 7:00 PM
        </Text>
      </View>
      <View style={styles.restroomsContainer}>
        <Text style={styles.restroomsHeader}>Restrooms:</Text>
        <Text style={styles.restrooms}>
          {'No Public Restrooms\nDuring The Pandemic'}
        </Text>
      </View>
      <View style={styles.exchangePolicyContainer}>
        <Text style={styles.exchangePolicyHeader}>Exchange Policy:</Text>
        <Text
          style={
            styles.exchangePolicy
          }>{`All Sales Are Final\nNo Refunds\nNo Exchanges`}</Text>
      </View>
    </View>
  );
};
const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoAndAddressContainer}>
        <SALogo />
        <StoreAddress />
      </View>
      <StoreDetails />
    </View>
  );
};
export default AppHeader;
