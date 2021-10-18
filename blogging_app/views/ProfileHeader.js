import React, {useContext} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/profileStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../context/AuthContext';
import {themeContext} from '../context/ThemeContext';
import {useNavigation} from '@react-navigation/native';

const profileHeader = () => {
  const authContextData = useContext(authContext);
  const themeContextData = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.headerIconStyle}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              themeContextData.theme === 'dark'
                ? themeContextData.setTheme('light')
                : themeContextData.setTheme('dark')
            }>
            {themeContextData.theme === 'dark' && (
              <Icon
                name="moon-o"
                size={25}
                color="#eca72c"
                style={styles.icon}
              />
            )}
            {themeContextData.theme === 'light' && (
              <Icon
                name="sun-o"
                size={25}
                color="#eca72c"
                style={styles.icon}
              />
            )}
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('hello')}>
            <Icon
              name="ellipsis-h"
              size={25}
              color="#eca72c"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.innerView}>
        <View style={styles.profile}>
          <View>
            <Image
              source={{uri: authContextData.user.photoURL}}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.alignment}>
            <Text style={styles.appName}>
              {authContextData.user.displayName}
            </Text>
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
