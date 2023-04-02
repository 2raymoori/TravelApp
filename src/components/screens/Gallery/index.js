import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';

const Gallery = ({route}) => {
  const {images} = route?.params || {};
  return (
    <View>
      <FlatList
        data={images}
        renderItem={item => <Image source={{uri: item}} style={styles.image} />}
      />
    </View>
  );
};

export default Gallery;

// AIzaSyBXVaYT2oNKlegxjzA4dqcZihATHGNcRTc   MyAPIKey
