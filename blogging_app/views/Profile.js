import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/profileStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const profile = ({navigation}) => {
  return (
    <View style={styles.outerView}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="angle-left" size={45} color="#eca72c" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.innerView}>
        <View style={styles.alignment}>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.profilePicture}
          />
          <View style={styles.alignment}>
            <Text style={styles.appName}>Palak</Text>
            <Text style={styles.headText}>
              Weave your Imagination into Words
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>0 Following</Text>
              <Text style={styles.textStyle}>0 Followers</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;
