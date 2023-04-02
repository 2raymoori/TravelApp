import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

const Title = ({text, style}) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

Title.defaultProps = {
  text: 'default Text',
};

export default Title;
