import React, {createContext, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const authContext = createContext();

export const AuthProvider = props => {
  const [user, setUser] = useState();

  const onGoogleButtonPress = async () => {
    try {
      // Get the users ID token
      console.log('into signin process');
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
    console.log(auth());
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth().signOut();
      // .then(() => alert('Your are signed out!'))
      // .catch(error => console.log(error));
      setUser(null);
    } catch (error) {
      console.log('error');
      console.error(error);
    }
  };

  return (
    <authContext.Provider value={{user, setUser, onGoogleButtonPress, signOut}}>
      {props.children}
    </authContext.Provider>
  );
};
