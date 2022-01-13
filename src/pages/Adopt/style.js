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
  text: {
    width: '85%',
    justifyContent: 'space-between',
  },
  grid: {
    width: '50%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // flexGrow: 1,
    width: 170,
    height: 250,
    margin: 20,
    // padding: 20,
    borderRadius: 12.34,
  },
  image: {
    width: 172,
    height: 124.3,
    borderTopLeftRadius: 12.34,
    borderTopRightRadius: 12.34,
  },
  infos: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  name: {
    color: '#333333', fontWeight: 'bold', fontSize: 18
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
  },
  modalView: {
    height: '95%',
    width: '94%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  seedetails: {
    backgroundColor: '#CAD8FF',
    borderRadius: 4,
    width: 100,
    fontSize: 10,
    fontWeight: '200',
    textAlign: 'center',
    color: '#2C2C2C',
  },
  TextSelected: {
    fontSize: 20,
    color: 'white',
    marginTop:3,
    textAlign: 'center',
    borderLeftWidth:1,
    borderRightWidth:1,
    borderLeftColor:'white',
    borderRightColor:'white',
  },
  TextUnselected:{
    fontSize: 20,
    marginTop: 3,
    color: '#333333',
    textAlign: 'center',
    borderLeftWidth:1,
    borderRightWidth:1,
    borderLeftColor:'#BBDFF3',
    borderRightColor:'#BBDFF3',
  },
  unselected: {
    width:'33.3%',
    display:'flex',
    
  },
  selected: {
    width:'33.3%',
    backgroundColor: '#BBDFF3',
    
    // padding: 10,
    // borderRadius: 10,
  },
});
export {styles};
