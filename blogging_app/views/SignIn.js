import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/signinStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const signin = () => {


    return(
        <View style={styles.outerView}>
            <TouchableOpacity>
                <Icon name="angle-left" size={45} color="#eca72c" style={styles.icon}/>
            </TouchableOpacity>

            <View style={styles.headView}>
                <Text style={styles.headText}>Sign In</Text>
            </View>
        
            <View style={styles.interface}>

                <View style={styles.group}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder="Enter your email" placeholderTextColor="#eca72c" style={styles.input}/>
                </View>

                <View style={styles.group}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder="Enter password" placeholderTextColor="#eca72c" style={styles.input}/>
                </View>


                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.text1}>Submit</Text>
                </TouchableOpacity>

        
              
            </View>

        </View>
    );
};



export default signin;