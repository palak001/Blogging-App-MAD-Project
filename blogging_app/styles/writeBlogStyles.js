import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

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
  },
  outerView: {
    backgroundColor: bg,
    height: hp('100'),
    flex: 1,
  },

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
    width: wp('90'),
    borderRadius: hp('1.5'),
    color: marigold,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: hp('4.5'),
    padding: hp('0.75'),
  },
  blogText: {
    width: wp('90'),
    // height: hp('50'),
    borderRadius: hp('1.5'),
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp('2.75'),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
  },
  group: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
