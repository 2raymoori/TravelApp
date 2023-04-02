import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import ImgToBase64 from 'react-native-image-base64';

import Share from 'react-native-share';

const ActionDetails = props => {
  const {item} = props.route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const [imageSource, setImageSource] = useState(mainImage);
  const slicedImage = item?.images?.length ? item?.images?.slice(0, 5) : [];

  console.log('###############################################');
  console.log(props.route.params);
  console.log('########################################');

  const goBack = () => {
    props.navigation.goBack();
  };
  const changeImageBackground = image => {
    setImageSource(image);
  };
  const onShare = async () => {
    try {
      const base64Image = await ImgToBase64.getBase64String(mainImage);
      console.log(mainImage);
      const imageurl = mainImage.split('?')[0];
      const imageExtension = imageurl.substring(
        imageurl.length,
        imageurl.length - 3,
      );
      console.log(`data:image/jpg;base64,${base64Image}`);
      Share.open({
        title: item?.name,
        message: 'Please, I wanted to share with ou this amazing attraction',
        url: `data:image/jpg;base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    // .then(base64String => doSomethingWith(base64String))
    // .catch(err => doSomethingWith(err))
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{
            borderRadius: 20,
          }}
          style={styles.mainImage}
          source={{uri: imageSource}}>
          <View style={styles.header}>
            <Pressable onPress={goBack} hitSlop={10}>
              <Image
                style={styles.icon}
                source={require('../../../assets/back.png')}
              />
            </Pressable>
            <Pressable onPress={onShare} hitSlop={10}>
              <Image
                style={styles.icon}
                source={require('../../../assets/share.png')}
              />
            </Pressable>
          </View>
          <View style={styles.footer}>
            {slicedImage.map(image => (
              <TouchableOpacity
                onPress={() => {
                  changeImageBackground(image);
                }}
                key={image}>
                <Image style={styles.miniImage} source={{uri: image}} />
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
        <View style={styles.detailFooter}>
          <View style={styles.detailFooterR1}>
            <View>
              <Text style={styles.r1Text}>{item?.name}</Text>
              <Text style={styles.r1SubText}>{item?.city}</Text>
            </View>
            <Text style={styles.r1Text}>{item?.entry_price}</Text>
          </View>
          <View style={styles.row2}>
            <View style={styles.row2Location}>
              <Image
                style={styles.icon}
                source={require('../../../assets/location_circle.png')}
              />
              <Text style={styles.address}>{item?.address}</Text>
            </View>
            <View style={styles.row2Time}>
              <Image
                style={styles.icon}
                source={require('../../../assets/schedule.png')}
              />
              <View>
                <Text style={styles.address}>OPEN</Text>
                <Text style={styles.address}>
                  {item?.opening_time} - {item?.closing_time}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <MapView
          style={{
            width: '100%',
            height: 200,
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
          onPress={() => {
            props.navigation.navigate('MapView', {item});
          }}
          style={styles.fullScreenText}>
          Show Full Screen
        </Text>
      </View>
    </ScrollView>
  );
};

export default ActionDetails;
