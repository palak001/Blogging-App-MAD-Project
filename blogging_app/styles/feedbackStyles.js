import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  rich: {
    minHeight: hp(50),
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
});

export default styles;
