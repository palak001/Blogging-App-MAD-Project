import React, {createContext, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, update} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

export const authContext = createContext();
export const AuthProvider = props => {
  const firebaseApp = initializeApp(firebaseConfig);
  // Get a reference to the database service
  const database = getDatabase(firebaseApp);

  const [user, setUser] = useState();

  const onGoogleButtonPress = async () => {
    try {
      console.log('into signin process');
      const {idToken} = await GoogleSignin.signIn();
      // console.log(idToken);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const user = (await auth().signInWithCredential(googleCredential)).user;
      if (user) {
        const userData = {
          author: user.displayName,
          userId: user.uid,
          photoUrl: user.photoURL,
        };
        const email = user.email.replace(/\./g, ','); // replaced . by ,
        const updates = {};
        updates['/users/' + email] = userData;
        update(ref(database), updates);
      }

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
