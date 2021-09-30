import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#EFF9FF',
    height: '100%',
  },
  header: {
    height: '7%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    width: '85%', justifyContent: 'space-between'
  },
  grid:{
    width: '50%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  card:{
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // flexGrow: 1,
    width: 170,
    height: 250,
    margin: 20,
    // padding: 20,
    borderRadius: 12.34,
  },
  image:{
    width: 172,
    height: 124.3,
    borderTopLeftRadius: 12.34,
    borderTopRightRadius: 12.34,
  },
  infos:{
    width:'100%',display:'flex', alignItems:'center'
  },
  title:{
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  name:{color: '#333333', fontWeight:'bold', fontSize:18}
});
export {styles};
