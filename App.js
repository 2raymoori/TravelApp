import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;
