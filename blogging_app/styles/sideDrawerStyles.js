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
        zIndex: 1,
        position: 'absolute',           
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: hp(1.5),
        paddingLeft: hp(1.5),
    },
    navHeadView: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
     navAppName: {
        fontSize: hp('3'),
        paddingLeft: hp(2),
        color: marigold,
        fontFamily: 'Sofia',
    },
    menu: {
       paddingTop: hp(2),
    },
    menuItems:{
        fontSize: hp('2.5'),
        paddingLeft: hp(2),
        color: lgrey,
        paddingTop: hp(2),
        // fontFamily: 'Poppins-Regular',
    }

});

export default styles;