import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//colours
const gunmetal = '#16262e';
const marigold = '#eca72c';
const yellowcrayola = '#fbb13c';
const selectiveyellow = '#ffba08';
const darkyellow = '#ffba08';
const orangeyellow = '#ff9e00';
const extradarkblue = '#14213d';

const styles = StyleSheet.create({
    headView : {
        marginTop: hp('18'),
        marginBottom : hp('1'),
        justifyContent : 'center',
        alignItems : 'center'
    },
    headText : {
        fontSize: hp('2.5'),
        color: 'white'
    },
    appName : {
        fontSize: hp('9'),
        // padding: 10,
        color: marigold,
        fontFamily : 'monospace'
    },
    outerView : {
        alignItems : 'center',
        backgroundColor : extradarkblue,
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
        padding: hp('0.75'),
        color: extradarkblue
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
        color: marigold
    },
    commentTxt : {
        fontSize: hp('2.5'),
        marginBottom: hp('0.5'),
        color: 'white'
    }

});


export default styles;