import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
    outerView: {
        width: wp(80),
        height: hp(100),
        backgroundColor: bg,
        borderColor: 'yellow',
        borderWidth: hp(1)
          
    },
    navHeadView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
     navAppName: {
        fontSize: hp('3'),
        paddingLeft: hp(2),
        color: marigold,
        fontFamily: 'Sofia',
    },

});

export default styles;