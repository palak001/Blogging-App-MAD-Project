import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
    outerview: {
        backgroundColor: bg,
        width: wp(100),
        height: hp(100),
        alignContent: 'center',
        alignItems: 'center',
    },
    navHeadView: {
        paddingTop: hp(3),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    navAppName: {
        fontSize: hp('4'),
        paddingLeft: hp(2),
        color: marigold,
        fontFamily: 'Sofia',
    },
    contentView: {
        paddingTop: hp(2.5),
    },
    ques: {
        fontSize: hp(2.5),
        color: marigold,
    },
    ans: {
        fontSize: hp(2.5),
        color: lgrey,
    },
    element: {
        paddingLeft: hp(1.5),
        paddingTop: hp(1.5),
        paddingBottom: hp(1.5)

    }
 
});

export default styles;
