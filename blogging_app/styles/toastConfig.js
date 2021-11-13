import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from './theme';

const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green', backgroundColor: bg}}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: hp(3),
        fontWeight: 'bold',
        color: marigold
      }}
      text2Style={{
        fontSize: hp(2),
        color: lgrey
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', backgroundColor: bg }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: hp(3),
        fontWeight: 'bold',
        color: marigold
      }}
      text2Style={{
        fontSize: hp(2),
        color: lgrey
      }}
    />
  )
};

export default toastConfig;
