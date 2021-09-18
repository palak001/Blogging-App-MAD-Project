import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//colours

// const extradarkblue = '#14213d';

//yellow black palette
const lgrey = '#d6d6d6';
const lyellow = '#ffee32';
const dyellow = '#ffd100';
const charcoal = '#202020';
const dgrey = '#333533';
const marigold = '#eca72c';


const bg = '#202020';

const styles = StyleSheet.create({
    headView : {
        marginTop: hp('18'),
        marginBottom : hp('1'),
        justifyContent : 'center',
        alignItems : 'center'
    },
    headText : {
        fontSize: hp('2.5'),
        color: lgrey,
        fontFamily: 'Pacifico'
    },
    appName : {
        fontSize: hp('9'),
        // padding: 10,
        color: marigold,
        fontFamily : 'Sofia',

    },
    outerView : {
        alignItems : 'center',
        backgroundColor : bg,
        height : hp('100')
    },
    btn1 : {
        marginTop: hp('8'),
        marginBottom: hp('4'),
        padding: hp('1.75'),
        width: wp('60'),
        height: hp('10'),
        backgroundColor : marigold,
        borderRadius: hp('5'),
        alignItems : 'center',
        
    },
    text1 : {
        fontSize : hp('3.5'),
        padding: hp('0.50'),
        color: bg,
        fontFamily: 'Lato'       
    }, 
    btn2 : {
        padding: hp('1.75'),
        width: wp('60'),
        height: hp('10'),
        borderRadius: hp('5'),
        borderWidth:1.5,
        borderColor: marigold,
        alignItems : 'center',
        
    },
    text2 : {
        fontSize: hp('3.5'),
        padding: hp('0.5'),
        color: marigold,
        fontFamily: 'Lato'       
    },
    commentTxt : {
        fontSize: hp('2.5'),
        marginBottom: hp('0.5'),
        color: lgrey,
        fontFamily: 'Lato'       
        
    }

});


export default styles;