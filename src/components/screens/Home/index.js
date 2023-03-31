import React from 'react';
import {Text, View} from 'react-native';
import ClassComponent from '../../ClassComponnent';
import Title from '../../Title/Index';

const Home = () => {
  return (
    <View>
      <Title text="This is a title" />
      <Title />
      <ClassComponent />
    </View>
  );
};

export default Home;
