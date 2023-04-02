import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import AttractionCard from '../../AttractionCard';
import Categories from '../../Categories';
import Title from '../../Title/Index';
import styles from './styles';
import jsonData from '../../../data/attraction.json';
import categoryData from '../../../data/categories.json';
import {useNavigation} from '@react-navigation/native';
const ALL = 'All';
const Home = props => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState(jsonData);
  useEffect(() => {
    setData([]);
  }, []);
  const navigation = useNavigation();
  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(e => {
        return e.categories?.includes(selectedCategory);
      });
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <ScrollView contentContainerStyle={styles.row}>
        {[...data, ...data]?.map(e => {
          return (
            <AttractionCard
              key={e.id}
              subtitle={e.city}
              title="Entertainment Park"
              imageSrc={e.images?.length ? e.images[0] : {}}
            />
          );
        })}
      </ScrollView> */}
      <FlatList
        numColumns={2}
        data={data}
        ListEmptyComponent={
          <View style={styles.errorContainer}>
            <Text style={styles.error}>Sorry No Item Found</Text>
          </View>
        }
        ListHeaderComponent={
          <>
            <Title text="Where do" style={{fontWeight: 'normal'}} />
            <Title text={'you want to go?'} />
            <Title text="Explore Attraction" style={styles.subtitle} />
            <Categories
              onCategoryPress={setSelectedCategory}
              selectedCategory={selectedCategory}
              categories={[ALL, ...categoryData]}
            />
          </>
        }
        renderItem={({item}) => {
          return (
            <AttractionCard
              onCardPress={() => {
                navigation.navigate('ActionDetail', {item});
              }}
              key={item.id}
              subtitle={item.city}
              title={item.name}
              imageSrc={item.images?.length ? item.images[0] : {}}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
