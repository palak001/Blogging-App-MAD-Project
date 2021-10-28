import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, lyellow, dyellow, charcoal, dgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  headView: {
    marginTop: hp('2'),
    marginBottom: hp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: hp('3'),
    color: lgrey,
    fontFamily: 'Lato',
    marginBottom: hp('3.5'),
    marginTop: hp('1.5'),

    // fontFamily: 'Pacifico'
  },
  outerView: {
    // alignItems : 'center',
    backgroundColor: bg,
    height: hp('100'),
  },
  // bookMarkIcon : {
  //     marginTop : hp('8'),
  // },
  btn1: {
    marginTop: hp('2.5'),
    marginBottom: hp('2'),
    padding: hp('1.5'),
    width: wp('35'),
    height: hp('7'),
    backgroundColor: marigold,
    borderRadius: hp('3.5'),
    alignItems: 'center',
  },
  text1: {
    fontSize: hp('3'),
    // padding: hp('0.2'),
    color: bg,
    fontFamily: 'Lato',
  },
  interface: {
    alignItems: 'center',
  },
  icon: {
    marginLeft: hp('2'),
    marginTop: hp('2'),
  },
  label: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp('2.25'),
    marginBottom: hp('0.5'),
  },
  title: {
    // borderWidth: 1.5,
    width: wp('90'),
    height: hp('8'),
    // borderColor: marigold,
    borderRadius: hp('1.5'),
    color: marigold,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: hp('4.5'),
    padding: hp('0.75'),
  },
  blogText: {
    // borderWidth: 1.5,
    width: wp('90'),
    height: hp('50'),
    // borderColor: marigold,
    borderRadius: hp('1.5'),
    color: lgrey,
    // fontWeight : 'bold',
    fontFamily: 'Lato',
    fontSize: hp('3'),
    textAlignVertical: 'top',
    // padding: hp('0.75')
  },
  group: {
    // marginBottom: hp('1.7'),
    // justifyContent : 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
