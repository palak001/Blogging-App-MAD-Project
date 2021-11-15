import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp(100),
  },
  scrollView: {
    height: '40%',
    width: '100%',
    alignSelf: 'center',
  },
  headerIconStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  outerView: {
    backgroundColor: bg,
    height: hp('100'),
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: hp('5'),
    height: hp('5'),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 100,
    // backgroundColor: marigold,
  },
  appName: {
    fontSize: hp('4'),
    // padding: 10,
    color: marigold,
    fontFamily: 'Sofia',
  },
  headText: {
    fontSize: hp('2.5'),
    color: lgrey,
    fontFamily: 'Pacifico',
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
    fontFamily: 'PTSans',
  },
  textStyle2: {
    color: marigold,
    padding: 10,
    fontFamily: 'PTSans',
    textAlign: 'center',
  },
  alignment: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default styles;
