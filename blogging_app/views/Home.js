import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../styles/homeStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const home = () => {


    return(
        <View style={styles.outerView}>

            <View style={styles.headView}>
                <Icon name="bookmark" size={45} color="#eca72c" />
                <Text style={styles.appName}>BLOGUE</Text>
                <Text style={styles.headText}>Weave your Imagination into Words</Text>
            </View>
        
            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.text1}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.commentTxt}>Not an existing user?</Text>
            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    );
};



export default home;