import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/homeStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../context/AuthContext';
import {themeContext} from '../context/ThemeContext';
import LoggedInPage from './LoggedInPage';

const home = ({navigation}) => {

  const contextAuth = useContext(authContext);
  const contextTheme = useContext(themeContext);

  return (
    <>
      {!contextAuth.user && (
        <View style={styles.outerView}>
          <View style={styles.headView}>
            <Icon name="bookmark" size={45} color="#eca72c" />
            <Text style={styles.appName}>BLOGUE</Text>
            <Text style={styles.headText}>
              Weave your Imagination into Words
            </Text>
          </View>
          {!contextAuth.user && (
            <>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text1}>Sign In</Text>
              </TouchableOpacity>
              <Text style={styles.commentTxt}>Not an existing user?</Text>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.text2}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.commentTxt}>Anonymous</Text>
              </TouchableOpacity>
            </>
          )}

          {contextAuth.user && (
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.commentTxt}>Visit profile</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

      )}

      {contextAuth.user && <LoggedInPage navigation={navigation} />}
    </>
  );
};

export default home;
