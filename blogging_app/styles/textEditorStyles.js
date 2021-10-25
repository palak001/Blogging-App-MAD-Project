import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  editor: {
    fontSize: hp('3'),
    padding: hp('0.5'),
    color: lgrey,
    fontFamily: 'Lato',
    width: '100%',
  },
  textStyle: {
    color: marigold,
    padding: 10,
    fontSize: hp('2.5'),
    fontFamily: 'Lato',
  },
  icon: {
    width: hp('6'),
    height: hp('6'),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  outerView: {
    // alignItems: 'center',
    backgroundColor: bg,
    height: hp('100'),
    padding: 10,
  },
});

export default styles;
