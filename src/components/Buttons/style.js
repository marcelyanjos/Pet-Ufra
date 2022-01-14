import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  TextSelected: {
    fontSize: 20,
    color: 'white',
    marginTop: 3,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },
  TextUnselected: {
    fontSize: 20,
    marginTop: 3,
    color: '#333333',
    textAlign: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: '#BBDFF3',
    borderRightColor: '#BBDFF3',
  },
  unselected: {
    width: '33.3%',
    display: 'flex',
  },
  selected: {
    width: '33.3%',
    backgroundColor: '#BBDFF3',

    // padding: 10,
    // borderRadius: 10,
  },
});
export {styles};
