const styles = {
  head: {
    height: '100%',
    backgroundColor: '#FAFDFF',
    alignItems:'center'
  },
  headcontainer: {
    height: '7%',
    width: '100%',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtitle: {
    width: '92%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    color: '#323232',
    //   width:150,
    // borderBottomWidth: 1,
    // borderColor: '#aad7f2',
    fontFamily: 'PatuaOne-Regular',
  },
  subtitle: {
    marginTop:8,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: '400',
    color: '#323232',
    fontWeight: '600',
  },
  button: {
    height: 52,
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 3,
    marginBottom:10,
  },
  buttontitle: {
    marginLeft: 15,
    width: '80%',
    fontSize: 17,
    fontWeight: '400',
    color: '#323232',
    fontWeight: 'bold',
  },
};
export default styles;
