const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  error: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 20,
  },
  errorContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
