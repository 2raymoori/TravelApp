const {StyleSheet, Dimensions} = require('react-native');
const screen = Dimensions.get('window');
const width = screen.width;
const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 6,
  },
  image: {
    width: (width - 40 * 2) / 2,
    height: 120,
    borderRadius: 15,
  },
  card: {
    borderWidth: 1,
    // padding: 4,
    marginBottom: 10,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 8,
    color: 'rgba(0,0,0,0.5)',
    fontWeight: '400',
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 4,
  },
  row: {
    marginBottom: 10,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
