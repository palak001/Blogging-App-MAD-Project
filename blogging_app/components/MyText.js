import React from 'react';
import {Text} from 'react-native';

export default function MyText (props) {

    return(
        <>
            <Text style={{fontFamily: 'Poppins-Regular'}}>
                {props.children}
            </Text>
        </>
    );
};



