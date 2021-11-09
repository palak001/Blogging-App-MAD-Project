import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';


const styles = StyleSheet.create({
  a: {
    fontWeight: "bold",
    color: lgrey,
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: hp(3),
  },
  /*******************************/
  container: {
    flex: 1,
    marginTop: hp(4),
    backgroundColor: "yellow",
  },
  editor: {
    minHeight: hp(50),
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  rich: {
    height: hp(50),
    flex: 1,
    backgroundColor: "#000000"
  },
  richBar: {
    height: hp(10),
    backgroundColor: marigold,
  },
  text: {
    fontWeight: "bold",
    fontSize: hp(4),
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
  contentStyle: {
    backgroundColor: 'black',
    color: 'white',
    
  }
});

export default styles;
