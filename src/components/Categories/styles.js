const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    paddingVertical: 2,
  },
  selectedItem: {
    textDecorationColor: 'black',
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
});

export default styles;
