import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const styles = StyleSheet.create({
    outerview: {
        backgroundColor: bg,
        height: hp(100),
        width: wp(100),
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
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    content:{
        fontSize: hp(2.5),
        color: lgrey,
    },
    namesView: {
        paddingTop: hp(2.5),
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
