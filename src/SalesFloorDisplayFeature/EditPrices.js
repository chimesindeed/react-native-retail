import React, {useState, useContext} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SoftcoverPrice,
  HardcoverPrice,
  ChildrensPrice,
  AlbumsPrice,
  TapesPrice,
  CdsPrice,
  DvdsPrice,
  SetsPrice,
} from '../App';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  pageContainer: {
    height: ScreenHeight,
    backgroundColor: 'lightgreen',
  },
  itemGroup: {
    width: 250,
    backgroundColor: 'lightblue',
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    padding: 10,
    marginLeft: 20,
    marginBottom: 14,
  },
  sideBySide: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginLeft: 7,
    paddingLeft: 10,
    paddingTop: 7,
    marginBottom: 11,
  },
  inputBox: {
    width: 60,
    height: 37,
    paddingTop: 10,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
  button: {
    width: 60,
    height: 37,
    paddingTop: 10,
    paddingLeft: 12,
    backgroundColor: 'black',
    color: 'white',
  },
  itemHeader: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '200',
    marginTop: -1,
    marginBottom: 5,
  },
  pageHeader: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginBottom: 14,
    marginTop: 6,
  },
  dividerLine: {},
});

const Header = () => {
  return (
    <View>
      <Text style={styles.pageHeader}>Update Prices</Text>
    </View>
  );
};
const books = 'Books';
const media = 'Media';
const currentPrice = 'current price';
const softcover = 'Softcover';
const hardcover = 'Hardcover';
const childrens = 'Childrens';
const cassettesAndVHS = 'Cass / Vhs';
const albums = 'Albums';
const cds = 'Cds';
const dvds = 'Dvds';
const sets = 'Sets';
export const EditPrices = () => {
  const [softcoverInput, setSoftcoverInput] = useState('');
  const [hardcoverInput, setHardcoverInput] = useState('');
  const [childrensInput, setChildrensInput] = useState('');
  const [tapesInput, setTapesInput] = useState('');
  const [albumsInput, setAlbumsInput] = useState('');
  const [cdsInput, setCdsInput] = useState('');
  const [dvdsInput, setDvdsInput] = useState('');
  const [setsInput, setSetsInput] = useState('');

  const [softcoverPrice, setSoftcoverPrice] = useContext(SoftcoverPrice);
  const [hardcoverPrice, setHardcoverPrice] = useContext(HardcoverPrice);
  const [childrensPrice, setChildrensPrice] = useContext(ChildrensPrice);
  const [tapesPrice, setTapesPrice] = useContext(TapesPrice);
  const [albumsPrice, setAlbumsPrice] = useContext(AlbumsPrice);
  const [cdsPrice, setCdsPrice] = useContext(CdsPrice);
  const [dvdsPrice, setDvdsPrice] = useContext(DvdsPrice);
  const [setsPrice, setSetsPrice] = useContext(SetsPrice);

  const handleChangeSoftcover = e => {
    console.log(e);
    setSoftcoverInput(e);
  };
  const handleChangeHardcover = e => {
    console.log(e);
    setHardcoverInput(e);
  };
  const handleChangeChildrens = e => {
    console.log(e);
    setChildrensInput(e);
  };
  const handleChangeTapes = e => {
    console.log(e);
    setTapesInput(e);
  };
  const handleChangeAlbums = e => {
    console.log(e);
    setAlbumsInput(e);
  };
  const handleChangeCds = e => {
    console.log(e);
    setCdsInput(e);
  };
  const handleChangeDvds = e => {
    console.log(e);
    setDvdsInput(e);
  };
  const handleChangeSets = e => {
    console.log(e);
    setSetsInput(e);
  };

  const updateSoftcover = e => {
    e.preventDefault();
    setSoftcoverPrice(softcoverInput);
    AsyncStorage.setItem('softcoverPrice', softcoverInput.toString());
  };
  const updateHardcover = e => {
    e.preventDefault();
    setHardcoverPrice(hardcoverInput);
    AsyncStorage.setItem('hardcoverPrice', hardcoverInput.toString());
  };
  const updateChildrens = e => {
    e.preventDefault();
    setChildrensPrice(childrensInput);
    AsyncStorage.setItem('childrensPrice', childrensInput.toString());
  };

  const updateTapes = e => {
    e.preventDefault();
    setTapesPrice(tapesInput);
    AsyncStorage.setItem('tapesPrice', tapesInput.toString());
  };
  const updateAlbums = e => {
    e.preventDefault();
    setAlbumsPrice(albumsInput);
    AsyncStorage.setItem('albumsPrice', albumsInput.toString());
  };
  const updateCds = e => {
    e.preventDefault();
    setCdsPrice(cdsInput);
    AsyncStorage.setItem('cdsPrice', cdsInput.toString());
  };

  const updateDvds = e => {
    e.preventDefault();
    setDvdsPrice(dvdsInput);
    AsyncStorage.setItem('dvdsPrice', dvdsInput.toString());
  };
  const updateSets = e => {
    e.preventDefault();
    setSetsPrice(setsInput);
    AsyncStorage.setItem('setsPrice', setsInput.toString());
  };

  return (
    <View style={styles.pageContainer}>
      <Header />

      <ScrollView>
        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{softcover}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeSoftcover}
              keyboardType="numeric"
              placeholder={softcoverPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateSoftcover} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{hardcover}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeHardcover}
              keyboardType="numeric"
              placeholder={hardcoverPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateHardcover} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{childrens}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeChildrens}
              keyboardType="numeric"
              placeholder={childrensPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateChildrens} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{cassettesAndVHS}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeTapes}
              keyboardType="numeric"
              placeholder={tapesPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateTapes} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{albums}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeAlbums}
              keyboardType="numeric"
              placeholder={albumsPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateAlbums} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{cds}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeCds}
              keyboardType="numeric"
              placeholder={cdsPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateCds} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{dvds}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeDvds}
              keyboardType="numeric"
              placeholder={dvdsPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateDvds} />
          </View>
        </View>

        <View style={styles.itemGroup}>
          <Text style={styles.itemHeader}>{sets}</Text>
          <View style={styles.sideBySide}>
            <TextInput
              style={styles.inputBox}
              onChangeText={handleChangeSets}
              placeholder={setsPrice.toString()}
              placeholderTextColor="white"
            />
            <View style={styles.dividerLine} />
            <Button title="update" onPress={updateSets} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
