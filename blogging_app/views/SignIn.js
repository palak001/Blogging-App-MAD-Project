import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/signinStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {authContext} from '../Context/AuthContext';

const signin = ({navigation}) => {
  const [user, setUser] = useContext(authContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '189922610842-ut81urqk267rlf26f653g3ka69i02t05.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = user => {
    setUser(user);
    if (user) {
      navigation.navigate('Home');
    }
    console.log(user);
  };

  const onGoogleButtonPress = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      console.log(idToken);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!user && (
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
                onPress={onGoogleButtonPress}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* {user && (
        <View style={styles.outerView}>
          <View>
            <Text style={styles.headText}>Welcome {user.displayName}</Text>
            <Button onPress={signOut} title="LogOut" color="red"></Button>
          </View>
        </View>
      )} */}
    </>
  );
};
export default signin;
