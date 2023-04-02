import React from 'react';
import styles from './styles';
const {Text, View, TouchableOpacity, Image} = require('react-native');

const AttractionCard = ({imageSrc, onCardPress, subtitle, title}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onCardPress();
      }}
      style={styles.card}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <Text style={styles.title}>{title} </Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/locationIcon.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(AttractionCard);
