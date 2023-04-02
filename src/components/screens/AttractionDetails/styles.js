const {StyleSheet, Dimensions} = require('react-native');
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 5,
    padding: 10,
    fontSize: 20,
    width: 100,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'aqua',
    borderRadius: 20,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    margin: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.35)',
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 10,
  },
  detailFooterR1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    // padding: 5,
  },
  r1Text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  r1SubText: {
    fontWeight: '500',
    color: 'black',
    marginTop: 5,
    fontSize: 20,
  },
  row2: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: -25,
  },
  row2Location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: -15,
  },
  row2Time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: -15,
  },
  address: {
    fontSize: 10,
  },
  fullScreenText: {
    fontWeight: 'bold',
    color: '#4681A3',
    borderWidth: 2,
    fontSize: 16,
    textAlign: 'center',
    padding: 16,
  },
});
export default styles;
