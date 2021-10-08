import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  headView: {
    // marginTop: hp('18'),
    marginBottom: hp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: hp('7'),
    color: marigold,
    fontFamily: 'Lato',
    marginTop: hp('3'),
    marginBottom: hp('5.5'),
    // fontFamily: 'Pacifico'
  },
  outerView: {
    // alignItems : 'center',
    backgroundColor: bg,
    height: hp('100'),
  },
  btn1: {
    marginTop: hp('8'),
    marginBottom: hp('2'),
    padding: hp('1.75'),
    width: wp('50'),
    height: hp('9'),
    backgroundColor: marigold,
    borderRadius: hp('4'),
    alignItems: 'center',
  },
  text1: {
    fontSize: hp('3.25'),
    padding: hp('0.35'),
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
    fontSize: hp('3'),
    marginBottom: hp('1'),
  },
  input: {
    borderWidth: 1.5,
    width: wp('90'),
    height: hp('10'),
    borderColor: marigold,
    borderRadius: hp('2'),
    color: marigold,
    fontFamily: 'Lato',
    fontSize: hp('3'),
    padding: hp('1'),
  },
  group: {
    marginBottom: hp('3'),
  },
});

export default styles;
