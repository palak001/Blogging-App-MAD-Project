import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: bg,
    height: hp('100'),
    padding: 10,
    justifyContent: 'center',
  },
  createPost: {
    backgroundColor: '#eca72c',
    width: wp(10),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 35,
    right: 20,
  },

});

export default styles;
