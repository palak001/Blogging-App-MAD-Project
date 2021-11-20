import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../styles/sideDrawerStyles';


export default function SideDrawer ({onCloseDrawer}) {

    const navigation = useNavigation();

    return(
        <>
            <View style={styles.outerView}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => onCloseDrawer()}>
                        <Icon name='navicon' size={25} color='#eca72c' />
                    </TouchableOpacity>

                    <View style={styles.navHeadView}>
                        <Icon name='bookmark' size={20} color='#eca72c' />
                        <Text style={styles.navAppName}>BLOGUE</Text>
                    </View>

                    <View/>
                    
                
                </View>

                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => {
                        onCloseDrawer();
                        navigation.navigate('Faqs');
                    }}>
                        <Text style={styles.menuItems}>FAQs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        onCloseDrawer();
                        navigation.navigate('Feedback');
                    }}>
                        <Text style={styles.menuItems}>Send a Feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        onCloseDrawer();
                        navigation.navigate('AboutUs');
                    }}>
                        <Text style={styles.menuItems}>About Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );


};



