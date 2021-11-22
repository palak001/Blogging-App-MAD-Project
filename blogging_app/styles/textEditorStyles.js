import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  rich: {
    height: hp(45),
    flex: 1,
    // backgroundColor: lgrey
  },
  richBar: {
    height: hp(7),
    backgroundColor: marigold,
  },
  tib: {
    textAlign: 'center',
    color: bg,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  contentStyle: {
    backgroundColor: bg,
    color: lgrey,
  },
  textStyle: {
    color: marigold,
    padding: 10,
    fontSize: hp('3'),
    fontFamily: 'Lato',
    marginTop: hp(1.5),
    marginRight: hp(2),
  },
  backIcon: {
    marginLeft: hp(2),
    marginTop: hp(2),
  },
  large: {
    color: bg,
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  title: {
    // borderWidth: 1.5,
    width: wp('90'),
    height: hp('5'),
    // borderColor: marigold,
    borderRadius: hp('1.5'),
    color: marigold,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: hp('3'),
    padding: hp('0.75'),
    marginLeft: hp(1),
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // width: wp(70),
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle2: {
    color: bg,
    // padding: 10,
    fontSize: hp('2'),
    fontFamily: 'Lato',
    textAlign: 'center',
  },

  btn1: {
    marginTop: hp('2'),
    // marginBottom: hp('2'),
    padding: hp('1.5'),
    width: wp('30'),
    height: hp('7'),
    backgroundColor: marigold,
    borderRadius: hp('4'),
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
  },
});

export default styles;
