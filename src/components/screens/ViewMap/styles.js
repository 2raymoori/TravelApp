const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
    borderWidth: 1,
    borderColor: 'red',
  },
  back: {
    color: 'white',
    fontSize: 30,
    opacity: 0.6,
    borderRadius: 30,
    padding: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 10,
  },
});
export default styles;
