import 'react-native-gesture-handler';
import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {EditPrices} from './SalesFloorDisplayFeature/EditPrices';
import {StoreLocatorScreen} from './StoreLocatorFeature/StoreLocatorScreen';
import SalesFloorDisplayScreen from './SalesFloorDisplayFeature/SalesFloorDisplayScreen';
import InventoryManagement from './InventoryManagementFeature/InventoryManagement';

export const ChildrensPrice = React.createContext('');
export const SoftcoverPrice = React.createContext('');
export const HardcoverPrice = React.createContext('');
export const AlbumsPrice = React.createContext('');
export const TapesPrice = React.createContext('');
export const CdsPrice = React.createContext('');
export const DvdsPrice = React.createContext('');
export const SetsPrice = React.createContext('');

export const StoreAddress1 = React.createContext('');
export const StoreAddress2 = React.createContext('');
export const StorePhone = React.createContext('');
export const DeliveryPeople = React.createContext('');
export const InstagramLink = React.createContext('');

const Drawer = createDrawerNavigator();

const App = () => {
  const [childrensPrice, setChildrensPrice] = useState(0.49);
  const [softcoverPrice, setSoftcoverPrice] = useState(0.99);
  const [hardcoverPrice, setHardcoverPrice] = useState(1.99);
  const [albumsPrice, setAlbumsPrice] = useState(1.99);
  const [tapesPrice, setTapesPrice] = useState(1.99);
  const [cdsPrice, setCdsPrice] = useState(1.99);
  const [dvdsPrice, setDvdsPrice] = useState(2.99);
  const [setsPrice, setSetsPrice] = useState('As Marked');
  const [storeAddress1, setStoreAddress1] = useState('536 W. 46th St');
  const [storeAddress2, setStoreAddress2] = useState('10th & 11th Ave');
  const [storePhone, setStorePhone] = useState('212.757.2311');

  const getChildrensPrice = async () => {
    let childrens;
    try {
      childrens = await AsyncStorage.getItem('childrensPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (childrens !== null) {
        setChildrensPrice(childrens);
      }
    }
  };

  const getSoftcoverPrice = async () => {
    let softcover;
    try {
      softcover = await AsyncStorage.getItem('softcoverPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (softcover !== null) {
        setSoftcoverPrice(softcover);
      }
    }
  };

  const getHardcoverPrice = async () => {
    let hardcover;
    try {
      hardcover = await AsyncStorage.getItem('hardcoverPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (hardcover !== null) {
        setHardcoverPrice(hardcover);
      }
    }
  };

  const getAlbumsPrice = async () => {
    let albums;
    try {
      albums = await AsyncStorage.getItem('albumsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (albums !== null) {
        setAlbumsPrice(albums);
      }
    }
  };

  const getTapesPrice = async () => {
    let tapes;
    try {
      tapes = await AsyncStorage.getItem('tapesPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (tapes !== null) {
        setTapesPrice(tapes);
      }
    }
  };

  const getCdsPrice = async () => {
    let cds;
    try {
      cds = await AsyncStorage.getItem('cdsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (cds !== null) {
        setCdsPrice(cds);
      }
    }
  };

  const getDvdsPrice = async () => {
    let dvds;
    try {
      dvds = await AsyncStorage.getItem('dvdsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (dvds !== null) {
        setDvdsPrice(dvds);
      }
    }
  };

  const getSetsPrice = async () => {
    let sets;
    try {
      sets = await AsyncStorage.getItem('setsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (sets !== null) {
        setSetsPrice(sets);
      }
    }
  };
  const getStoreAddress1 = async () => {
    let address1;
    try {
      address1 = await AsyncStorage.getItem('address1');
    } catch (e) {
      console.log(e);
    } finally {
      if (address1 !== null) {
        setStoreAddress1(address1);
      }
    }
  };
  const getStoreAddress2 = async () => {
    let address2;
    try {
      address2 = await AsyncStorage.getItem('address2');
    } catch (e) {
      console.log(e);
    } finally {
      if (address2 !== null) {
        setStoreAddress2(address2);
      }
    }
  };
  const getStorePhone = async () => {
    let astorePhone;
    try {
      astorePhone = await AsyncStorage.getItem('storePhone');
    } catch (e) {
      console.log(e);
    } finally {
      if (astorePhone !== null) {
        setStorePhone(astorePhone);
      }
    }
  };
  useEffect(() => {
    getChildrensPrice();
  }, []);
  useEffect(() => {
    getSoftcoverPrice();
  }, []);
  useEffect(() => {
    getHardcoverPrice();
  }, []);
  useEffect(() => {
    getAlbumsPrice();
  }, []);
  useEffect(() => {
    getTapesPrice();
  }, []);
  useEffect(() => {
    getCdsPrice();
  }, []);
  useEffect(() => {
    getDvdsPrice();
  }, []);
  useEffect(() => {
    getSetsPrice();
  }, []);
  useEffect(() => {
    getStoreAddress1();
  }, []);
  useEffect(() => {
    getStoreAddress2();
  }, []);
  useEffect(() => {
    getStorePhone();
  }, []);

  return (
    <StoreAddress1.Provider value={[storeAddress1, setStoreAddress1]}>
      <StoreAddress2.Provider value={[storeAddress2, setStoreAddress2]}>
        <StorePhone.Provider value={[storePhone, setStorePhone]}>
          <ChildrensPrice.Provider value={[childrensPrice, setChildrensPrice]}>
            <SoftcoverPrice.Provider
              value={[softcoverPrice, setSoftcoverPrice]}>
              <HardcoverPrice.Provider
                value={[hardcoverPrice, setHardcoverPrice]}>
                <AlbumsPrice.Provider value={[albumsPrice, setAlbumsPrice]}>
                  <TapesPrice.Provider value={[tapesPrice, setTapesPrice]}>
                    <CdsPrice.Provider value={[cdsPrice, setCdsPrice]}>
                      <DvdsPrice.Provider value={[dvdsPrice, setDvdsPrice]}>
                        <SetsPrice.Provider value={[setsPrice, setSetsPrice]}>
                          <NavigationContainer>
                            <Drawer.Navigator initialRouteName="SalesFloorDisplayScreen">
                              <Drawer.Screen
                                name="SalesFloorDisplayScreen"
                                component={SalesFloorDisplayScreen}
                              />
                              <Drawer.Screen
                                name="Price & Header Settings"
                                component={EditPrices}
                              />
                              <Drawer.Screen
                                name="Inventory Management"
                                component={InventoryManagement}
                              />
                              <Drawer.Screen
                                name="Store Locator"
                                component={StoreLocatorScreen}
                              />
                            </Drawer.Navigator>
                          </NavigationContainer>
                        </SetsPrice.Provider>
                      </DvdsPrice.Provider>
                    </CdsPrice.Provider>
                  </TapesPrice.Provider>
                </AlbumsPrice.Provider>
              </HardcoverPrice.Provider>
            </SoftcoverPrice.Provider>
          </ChildrensPrice.Provider>
        </StorePhone.Provider>
      </StoreAddress2.Provider>
    </StoreAddress1.Provider>
  );
};
export default App;
