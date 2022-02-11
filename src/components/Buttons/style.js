import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  TextSelectedButton1: {
    fontSize: 16,
    color: '#a0cfe8',
    fontWeight:'600',
    height:'100%',
    // marginTop: 3,
    textAlign:'center',
    textAlignVertical:'center',
    borderWidth: 1,
    borderColor: '#BBDDF3',
  },
  TextUnselectedButton1: {
    fontSize: 16,
    height:'100%',
    // marginTop: 3,
    color: '#787878',
    textAlign: 'center',
    textAlignVertical:'center',
    borderColor:'#adadad',
    borderWidth:1.5,
  },
  unselectedButton1: {
    width: '33.338%',
    display: 'flex',
  },
  selectedButton1: {
    width: '33.338%',
    backgroundColor: '#EFF9FF',

    // padding: 10,
    // borderRadius: 10,
  },
  TextSelectedButton2: {
    fontSize: 16,
    color: '#666666',
    fontWeight:'600',
    marginTop: 3,
    textAlign: 'center',
  },
  TextUnselectedButton2: {
    fontSize: 16,
    marginTop: 3,
    color: '#9ac9e3',
    textAlign: 'center',
  },
  unselectedButton2: {
    width: '33.3%',
    borderBottomWidth:2.5,
    borderColor:'#e0e0e0',
    borderRaius:10,
  },
  selectedButton2: {
    width: '33.3%',
    // backgroundColor: '#BBDFF3',
    borderTopWidth:2.5,
    borderBottomWidth:2.5,
    borderColor:'#9ac9e3',
  }
});
export {styles};
