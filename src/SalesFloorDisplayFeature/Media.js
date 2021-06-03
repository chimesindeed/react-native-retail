import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ChildrensPrice,
  SoftcoverPrice,
  HardcoverPrice,
  AlbumsPrice,
  TapesPrice,
  CdsPrice,
  DvdsPrice,
  SetsPrice,
} from '../App';

const styles = StyleSheet.create({
  addLineSpace: {
    lineHeight: 40,
  },
  combined: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginBottom: 14,
    marginTop: 6,
  },

  prices: {
    color: 'white',
    letterSpacing: 1,
    marginBottom: 1,
    paddingRight: 10,
    marginRight: 3,
    fontSize: 15,
  },
  softcover: {
    color: 'navy',
    marginBottom: 1,
    fontSize: 15,
  },
  hardcover: {
    color: 'navy',
    marginBottom: 1,
    fontSize: 15,
  },
  childrens: {
    color: 'lightblue',
    marginBottom: 2,
    fontSize: 15,
  },

  media: {
    color: 'maroon',
    marginBottom: 1,
    paddingRight: 10,
    marginRight: 3,
    fontSize: 15,
  },
  mediaDivider: {
    backgroundColor: 'beige',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 43,
    width: 1,
    height: 133,
  },
});

const books = 'Books';
const media = 'Media';
const softcover = 'Softcover';
const hardcover = 'Hardcover';
const childrens = 'Childrens';
const tapes = 'Cass / Vhs';
const albums = 'Albums';
const cds = 'Cds';
const dvds = 'Dvds';
const sets = 'Sets';

const BooksHeader = () => {
  return (
    <View>
      <Text style={styles.header}>{`${books}`}</Text>
    </View>
  );
};

export const LineDivider = () => {
  return <View style={styles.mediaDivider} />;
};
const MediaHeader = () => {
  return (
    <View>
      <Text style={styles.header}>{`${media}`}</Text>
    </View>
  );
};
export const Books = () => {
  const [childrensPrice] = useContext(ChildrensPrice);
  const [softcoverPrice] = useContext(SoftcoverPrice);
  const [hardcoverPrice] = useContext(HardcoverPrice);

  return (
    <View>
      <BooksHeader />
      <View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${softcoverPrice}`}</Text>
          <Text style={styles.softcover}>{`${softcover}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text
            style={Object.assign(
              {},
              styles.prices,
              styles.addLineSpace,
            )}>{`${hardcoverPrice}`}</Text>
          <Text
            style={Object.assign(
              {},
              styles.hardcover,
              styles.addLineSpace,
            )}>{`${hardcover}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${childrensPrice}`}</Text>
          <Text style={styles.childrens}>{`${childrens}`}</Text>
        </View>
      </View>
    </View>
  );
};

export const Media = () => {
  const [albumsPrice] = useContext(AlbumsPrice);
  const [tapesPrice] = useContext(TapesPrice);
  const [cdsPrice] = useContext(CdsPrice);
  const [dvdsPrice] = useContext(DvdsPrice);
  const [setsPrice] = useContext(SetsPrice);
  return (
    <View>
      <MediaHeader />
      <View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${tapesPrice}`}</Text>
          <Text style={styles.media}>{`${tapes}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${albumsPrice}`}</Text>
          <Text style={styles.media}>{`${albums}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${cdsPrice}`}</Text>
          <Text style={styles.media}>{`${cds}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text style={styles.prices}>{`${dvdsPrice}`}</Text>
          <Text style={styles.media}>{`${dvds}`}</Text>
        </View>
        <View style={styles.combined}>
          <Text
            style={Object.assign({}, styles.media, styles.addLineSpace, {
              color: 'beige',
            })}>{`${sets} ${setsPrice}`}</Text>
        </View>
      </View>
    </View>
  );
};
