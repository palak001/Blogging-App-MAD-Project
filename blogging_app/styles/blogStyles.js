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
  smallTitle: {
    fontSize: hp('2.5'),
    padding: hp('0.5'),
    color: marigold,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  preview: {
    height: hp(70),
    justifyContent: 'space-between',
  },
  smallPreview: {
    height: hp(25),
    justifyContent: 'space-around',
  },
  previewImage: {
    height: hp(30),
    width: wp(90),
  },
  smallPreviewImage: {
    height: hp(10),
    width: wp(20),
    resizeMode: 'cover',
  },
  smallProfile: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  verySmallProfile: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginRight: 10,
  },
  icon: {
    width: hp('3'),
    height: hp('3'),
    // paddingLeft: 3,
  },
  commentTxt: {
    fontSize: hp('2'),
    marginBottom: hp('0.5'),
    color: lgrey,
    fontFamily: 'Lato',
    lineHeight: 22,
  },
  commentTxt2: {
    fontSize: hp('2'),
    marginBottom: hp('0.5'),
    color: lgrey,
    fontFamily: 'Lato',
    lineHeight: 25,
    paddingTop: 10,
  },
  smallTxt: {
    fontSize: hp('1'),
    marginBottom: hp('0.5'),
    color: lgrey,
    fontFamily: 'Lato',
    lineHeight: 22,
  },
});

export default styles;
