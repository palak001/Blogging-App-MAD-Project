import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';


const styles = StyleSheet.create({
  a: {
    fontWeight: "bold",
    color: bg,
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: hp(4),
  },
  rich: {
    minHeight: hp(51.5),
    flex: 1,
    // backgroundColor: lgrey
  },
  richBar: {
    height: hp(7),
    backgroundColor: marigold,
  },
  tib: {
    textAlign: "center",
    color: bg,
    fontSize: hp(3),
    fontWeight: "bold"
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
  }, 
  
});

export default styles;
