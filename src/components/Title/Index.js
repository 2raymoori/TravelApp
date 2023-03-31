import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

const Title = props => {
  const [stateTet, setText] = useState('defult State');
  useEffect(() => {
    console.log('dfs');
  }, []);
  return (
    <View>
      <Text style={styles.title}>{props.text}</Text>
      <Text>{stateTet}</Text>
      <Button
        title="change Something"
        onPress={() => {
          setText('Heyy');
        }}
      />
    </View>
  );
};

Title.defaultProps = {
  text: 'default Text',
};

export default Title;
