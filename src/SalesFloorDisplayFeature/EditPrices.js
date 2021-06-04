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
  const adjustFormatting = item => {
    const arr = item.split('');
    const space = ['  '];
    const formatted = space.concat(arr).join('');
    return formatted;
  };
  const updateSoftcover = e => {
    let result;
    softcoverInput.length === 3
      ? (result = adjustFormatting(softcoverInput))
      : (result = softcoverInput);
    setSoftcoverPrice(result);
    AsyncStorage.setItem('softcoverPrice', result.toString());
  };
  const updateHardcover = e => {
    let result;
    hardcoverInput.length === 3
      ? (result = adjustFormatting(hardcoverInput))
      : (result = hardcoverInput);
    setHardcoverPrice(result);
    AsyncStorage.setItem('hardcoverPrice', result.toString());
  };
  const updateChildrens = e => {
    let result;
    childrensInput.length === 3
      ? (result = adjustFormatting(childrensInput))
      : (result = childrensInput);
    setChildrensPrice(result);
    AsyncStorage.setItem('childrensPrice', result.toString());
  };

  const updateTapes = e => {
    let result;
    tapesInput.length === 3
      ? (result = adjustFormatting(tapesInput))
      : (result = tapesInput);
    setTapesPrice(result);
    AsyncStorage.setItem('tapesPrice', result.toString());
  };
  const updateAlbums = e => {
    let result;
    albumsInput.length === 3
      ? (result = adjustFormatting(albumsInput))
      : (result = albumsInput);
    setAlbumsPrice(result);
    AsyncStorage.setItem('albumsPrice', result.toString());
  };
  const updateCds = e => {
    let result;
    cdsInput.length === 3
      ? (result = adjustFormatting(cdsInput))
      : (result = cdsInput);
    setCdsPrice(result);
    AsyncStorage.setItem('cdsPrice', result.toString());
  };

  const updateDvds = e => {
    let result;
    dvdsInput.length === 3
      ? (result = adjustFormatting(dvdsInput))
      : (result = dvdsInput);
    setDvdsPrice(result);
    AsyncStorage.setItem('dvdsPrice', result.toString());
  };
  const updateSets = e => {
    let result;
    setsInput.length === 3
      ? (result = adjustFormatting(setsInput))
      : (result = setsInput);
    setSetsPrice(result);
    AsyncStorage.setItem('setsPrice', result.toString());
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
