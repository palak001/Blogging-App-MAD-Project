import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//colours
const gunmetal = '#16262e';
const marigold = '#eca72c';
const yellowcrayola = '#fbb13c';
const selectiveyellow = '#ffba08';
const darkyellow = '#ffba08';
const orangeyellow = '#ff9e00';
const extradarkblue = '#000814';

const styles = StyleSheet.create({
    headView : {
        marginTop: hp('25'),
        marginBottom : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    headText : {
        fontSize: hp('2'),
        color: 'white'
    },
    appName : {
        fontSize: hp('8'),
        padding: 10,
        color: marigold
    },
    outerView : {
        alignItems : 'center',
        backgroundColor : extradarkblue,
        height : hp('100')
    },
    btn1 : {
        margin: 40,
        padding: 15,
        width: wp('60'),
        height: hp('10'),
        backgroundColor : marigold,
        color: extradarkblue,
        borderRadius: hp('5'),
        alignItems : 'center'
    },
    text1 : {
        fontSize : hp('4')
    }, 
    btn2 : {
        margin: 5,
        padding: 15,
        width: wp('60'),
        height: hp('10'),
        borderRadius: hp('5'),
        borderWidth:1,
        borderColor: marigold,
        alignItems : 'center',
        
    },
    text2 : {
        fontSize: hp('4'),
        color: marigold
    },
    commentTxt : {
        fontSize: hp('2.5'),
        color: marigold
    }

});


export default styles;