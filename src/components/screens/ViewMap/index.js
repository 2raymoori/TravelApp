import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
const ViewMap = props => {
  const {item} = props.route.params;
  console.log(item);
  return (
    <View style={styles.containers}>
      <MapView
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
          paddingBottom: 140,
        }}
        initialRegion={{
          latitude: item?.coordinates?.lat,
          longitude: item?.coordinates?.lon,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        <Marker
          coordinate={{
            latitude: item?.coordinates?.lat,
            longitude: item?.coordinates?.lon,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
          title={item?.name}
        />
      </MapView>
      <Text
        style={styles.back}
        onPress={() => {
          props.navigation.goBack();
        }}>
        Back
      </Text>
    </View>
  );
};
export default ViewMap;
