import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../styles/homeStyles';

const home = () => {


    return(
        <View style={styles.outerView}>

            <View style={styles.headView}>
                <Text style={styles.appName}>Blogue</Text>
                <Text style={styles.headText}>Weave your imagination into words</Text>
            </View>
        
            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.text1}>SIGN IN!</Text>
            </TouchableOpacity>

            <Text style={styles.commentTxt}>Not an existing user?</Text>
            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.text2}>SIGN UP</Text>
            </TouchableOpacity>

        </View>
    );
};



export default home;