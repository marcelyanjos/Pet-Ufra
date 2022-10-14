const styles = {
  root: {alignItems: 'center', backgroundColor: '#f2f5f7', height: '100%'},
  info: {
    height: '22%',
    width: '100%',
    backgroundColor: 'rgba(220, 241, 255, 0.6)',
    // borderBottomLeftRadius: 6,
    // borderBottomRightRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infobody: {
    width: '92%',
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '-2%',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#faf2ff',
  },
  name: {
    marginLeft: 15,
    fontFamily: 'PatuaOne-Regular',
    fontSize: 22,
    color: '#7f898f',
  },
  user: {marginLeft: 15, fontSize: 12, color: '#7f898f'},
  email: {marginLeft: 15, marginTop: 5, fontSize: 10, color: '#7f898f'},

  menu: {
    backgroundColor: '#FFFFFF',
    height: '78%',
    width: '95%',
    padding: 8,
    borderRadius: 20,
    top: -10,
    elevation: 2,
    shadowColor: '#7f898f',
  },
  menubody: {
    height: 80,
    width: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchable: {
    height: 55,
    marginTop: 1.5,
    backgroundColor: '#FFFFFF',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 15,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(70, 76, 89)',
  },
  icons: {
    marginLeft: 15,
    stroke: 'rgb(70, 76, 89)',
  },
  icons2: {
    marginLeft: 13,
    stroke: 'rgb(70, 76, 89)',
  },
};

export default styles;
