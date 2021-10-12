import React, {useContext} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/profileStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../context/AuthContext';

const profileHeader = () => {
  const context = useContext(authContext);
  return (
    <View style={{color: 'red'}}>
      <View style={styles.ellipseStyle}>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <Icon
            name="ellipsis-h"
            size={35}
            color="#eca72c"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.innerView}>
        <View style={styles.profile}>
          <View>
            <Image
              source={{uri: context.user.photoURL}}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.alignment}>
            <Text style={styles.appName}>{context.user.displayName}</Text>
            <Text style={styles.headText}>
              Weave your Imagination into Words
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>0 Following</Text>
              <Text style={styles.textStyle}>0 Followers</Text>
            </View>
          </View>
          {/* <TouchableOpacity
            style={btnStyles.btn1}
            onPress={() => {
              context.signOut();
              navigation.navigate('Home');
            }}>
            <Text style={btnStyles.text1}>Sign Out</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default profileHeader;
