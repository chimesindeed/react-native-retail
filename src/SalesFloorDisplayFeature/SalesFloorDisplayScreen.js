import React, {useEffect, useState, createContext} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DiscountsScreen} from './DiscountsScreen';

export const ChildrensPrice = React.createContext('');
export const SoftcoverPrice = React.createContext('');
export const HardcoverPrice = React.createContext('');
export const AlbumsPrice = React.createContext('');
export const CassettesVhsPrice = React.createContext('');
export const CdsPrice = React.createContext('');
export const DvdsPrice = React.createContext('');
export const SetsPrice = React.createContext('');

const App = () => {
  const [childrensPrice, setChildrensPrice] = useState(0.49);
  const [softcoverPrice, setSoftcoverPrice] = useState(0.99);
  const [hardcoverPrice, setHardcoverPrice] = useState(1.99);
  const [albumsPrice, setAlbumsPrice] = useState(1.99);
  const [cassettesVhsPrice, setCassettesVhsPrice] = useState(1.99);
  const [cdsPrice, setCdsPrice] = useState(1.99);
  const [dvdsPrice, setDvdsPrice] = useState(2.99);
  const [setsPrice, setSetsPrice] = useState(4.99);

  const setPrice = async () => {
    await AsyncStorage.setItem('childrensPrice', 'bazinga');
  };

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

  const getCassettesVhsPrice = async () => {
    let cassettesVhs;
    try {
      cassettesVhs = await AsyncStorage.getItem('cassettesVhsPrice');
    } catch (e) {
      console.log(e);
    } finally {
      if (cassettesVhs !== null) {
        setCassettesVhsPrice(cassettesVhs);
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

  useEffect(() => {
    getChildrensPrice();
  }, []);
  useEffect(() => {
    getSoftcoverPrice();
  }, [softcoverPrice]);
  useEffect(() => {
    getHardcoverPrice();
  }, [hardcoverPrice]);
  useEffect(() => {
    getAlbumsPrice();
  }, [albumsPrice]);
  useEffect(() => {
    getCassettesVhsPrice();
  }, [cassettesVhsPrice]);
  useEffect(() => {
    getCdsPrice();
  }, [cdsPrice]);
  useEffect(() => {
    getDvdsPrice();
  }, [dvdsPrice]);
  useEffect(() => {
    getSetsPrice();
  }, [setsPrice]);

  let ScreenHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    appContainer: {
      height: ScreenHeight,
      backgroundColor: 'beige',
    },
  });
  return (
    <ChildrensPrice.Provider value={[childrensPrice, setChildrensPrice]}>
      <SoftcoverPrice.Provider value={[softcoverPrice, setSoftcoverPrice]}>
        <HardcoverPrice.Provider value={[hardcoverPrice, setHardcoverPrice]}>
          <AlbumsPrice.Provider value={[albumsPrice, setAlbumsPrice]}>
            <CassettesVhsPrice.Provider
              value={[cassettesVhsPrice, setCassettesVhsPrice]}>
              <CdsPrice.Provider value={[cdsPrice, setCdsPrice]}>
                <DvdsPrice.Provider value={[dvdsPrice, setDvdsPrice]}>
                  <SetsPrice.Provider value={[setsPrice, setSetsPrice]}>
                    <View style={styles.appContainer}>
                      <DiscountsScreen />
                    </View>
                  </SetsPrice.Provider>
                </DvdsPrice.Provider>
              </CdsPrice.Provider>
            </CassettesVhsPrice.Provider>
          </AlbumsPrice.Provider>
        </HardcoverPrice.Provider>
      </SoftcoverPrice.Provider>
    </ChildrensPrice.Provider>
  );
};

export default App;
