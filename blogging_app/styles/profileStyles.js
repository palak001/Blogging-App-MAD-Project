import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
  outerView: {
    // alignItems : 'center',
    backgroundColor: bg,
    height: hp('100'),
    // justifyContent: 'space-between',
  },
  innerView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: hp('2'),
    marginTop: hp('2'),
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: marigold,
  },
  appName: {
    fontSize: hp('9'),
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
  alignment: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
