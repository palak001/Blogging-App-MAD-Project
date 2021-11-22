import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/signinStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {authContext} from '../Context/AuthContext';

const signin = ({navigation}) => {
  const context = useContext(authContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '189922610842-ut81urqk267rlf26f653g3ka69i02t05.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = user => {
    context.setUser(user);
    if (user) {
      navigation.navigate('Home');
    }
  };

  return (
    <>
      {!context.user && (
        <View style={styles.outerView}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name="angle-left"
              size={45}
              color="#eca72c"
              style={styles.icon}
            />
          </TouchableOpacity>

          <View style={styles.headView}>
            <Text style={styles.headText}>Sign In</Text>
          </View>

          <View style={styles.interface}>
            <View style={styles.group}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#eca72c"
                style={styles.input}
              />
            </View>

            <View style={styles.group}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Enter password"
                placeholderTextColor="#eca72c"
                style={styles.input}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.text1}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Or</Text>
            <TouchableOpacity>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={context.onGoogleButtonPress}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
export default signin;
