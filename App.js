import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/components/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './src/components/screens/Gallery';
import ActionDetails from './src/components/screens/AttractionDetails';
import ViewMap from './src/components/screens/ViewMap';

const Stack = createStackNavigator();
const App = () => {
  const sOptions = {headerShown: false};
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeView}>
        <Stack.Navigator screenOptions={sOptions}>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Gallery} name="Gallery" />
          <Stack.Screen component={ActionDetails} name="ActionDetail" />
          <Stack.Screen component={ViewMap} name="MapView" />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
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
