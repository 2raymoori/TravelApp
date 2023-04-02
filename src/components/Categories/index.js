import React from 'react';
import styles from './styles';
const {FlatList, Text, View, TouchableOpacity} = require('react-native');

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => {
              onCategoryPress(item);
            }}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export default React.memo(Categories);
