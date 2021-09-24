import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {lgrey, lyellow, dyellow, charcoal, dgrey, marigold, bg} from './theme';


const styles = StyleSheet.create({
    headView : {
        // marginTop: hp('18'),
        marginBottom : hp('1'),
        justifyContent : 'center',
        alignItems : 'center'
    },
    headText : {
        fontSize: hp('6.5'),
        color: marigold,
        fontFamily: 'Lato',
        marginBottom: hp('3.5')
        // fontFamily: 'Pacifico'
    },
    outerView : {
        // alignItems : 'center',
        backgroundColor : bg,
        height : hp('100')
    },
    btn1 : {
        marginTop: hp('5.5'),
        marginBottom: hp('2'),
        padding: hp('1.75'),
        width: wp('40'),
        height: hp('8'),
        backgroundColor : marigold,
        borderRadius: hp('3'),
        alignItems : 'center',
        
    },
    text1 : {
        fontSize : hp('3'),
        // padding: hp('0.2'),
        color: bg,
        fontFamily: 'Lato'       
    }, 
    interface: {
        alignItems: 'center'
    }, 
    icon : {
        marginLeft: hp('2'),
        marginTop: hp('2'),
    },
    label : {
        color: lgrey,
        fontFamily: 'Lato',
        fontSize: hp('2.25'),
        marginBottom: hp('0.5')
    },
    input : {
        borderWidth: 1.5,
        width: wp('90'),
        height: hp('8'),
        borderColor: marigold,
        borderRadius: hp('1.5'),
        color: marigold,
        fontFamily: 'Lato',
        fontSize: hp('2.25'),
        padding: hp('0.75')
        
       
    },
    group: {
        marginBottom: hp('1.7')
    }

});


export default styles;