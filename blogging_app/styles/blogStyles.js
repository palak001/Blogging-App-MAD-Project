import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  title: {
    fontSize: hp('3.5'),
    padding: hp('0.5'),
    color: marigold,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  preview: {
    height: hp(60),
    margin: 12,
    padding: 10,
    justifyContent: 'space-between',
  },
  previewImage: {
    height: hp(30),
    width: wp(90),
  },
  smallProfile: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  commentTxt: {
    fontSize: hp('2'),
    marginBottom: hp('0.5'),
    color: lgrey,
    fontFamily: 'Lato',
  },
});

export default styles;
