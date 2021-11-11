import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../styles/profileStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../Context/AuthContext';
import {themeContext} from '../Context/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

const Options1 = [
  {
    id: 1,
    name: 'Sign Out',
  },
  {
    id: 2,
    name: 'Update profile',
  },
];

const Options2 = [{id: 1, name: 'Mute'}];

const profileHeader = ({authorEmail}) => {
  const authContextData = useContext(authContext);
  const themeContextData = useContext(themeContext);
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [userProfile, setUserProfile] = useState();
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  useEffect(() => {
    if (authorEmail) {
      setUserEmail(authorEmail);
      const email = authorEmail.replace(/\./g, ','); // replaced . by ,
      const userRef = ref(database, 'users/' + email);
      onValue(
        userRef,
        snapshot => {
          setUserProfile(snapshot.val());
        },
        {onlyOnce: true},
      );
    }
  }, [authorEmail]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (showOptions) setShowOptions(false);
      }}>
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
            {showOptions && (
              <>
                <View
                  style={{position: 'absolute', top: 0, right: 0, zIndex: 1}}>
                  {userEmail === authContextData.user.email && (
                    <FlatList
                      data={Options1}
                      renderItem={({item}) => (
                        <TouchableHighlight
                          style={{padding: 20, backgroundColor: 'white'}}
                          activeOpacity={0.6}
                          underlayColor="#DDDDDD"
                          onPress={() => {
                            if (item.name === 'Sign Out') {
                              authContextData.signOut();
                              navigation.navigate('Home');
                            }
                          }}>
                          <Text>{item.name}</Text>
                        </TouchableHighlight>
                      )}
                      keyExtractor={item => item.id}
                      navigation={navigation}
                    />
                  )}

                  {userEmail !== authContextData.user.email && (
                    <FlatList
                      data={Options2}
                      renderItem={({item}) => (
                        <TouchableHighlight
                          style={{padding: 20, backgroundColor: 'white'}}
                          activeOpacity={0.6}
                          underlayColor="#DDDDDD"
                          onPress={() => {
                            if (item.name === 'Sign Out') {
                              authContextData.signOut();
                              navigation.navigate('Home');
                            }
                          }}>
                          <Text>{item.name}</Text>
                        </TouchableHighlight>
                      )}
                      keyExtractor={item => item.id}
                      navigation={navigation}
                    />
                  )}
                </View>
              </>
            )}
            <TouchableOpacity
              onFocus={() => {
                setShowOptions(!showOptions);
                console.log(showOptions);
              }}
              onPress={() => {
                setShowOptions(!showOptions);
                console.log(showOptions);
              }}>
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
              {userProfile && userEmail !== authContextData.user.email && (
                <>
                  <Image
                    source={{uri: `${userProfile.photoUrl}`}}
                    style={styles.profilePicture}
                  />
                </>
              )}
              {userEmail === authContextData.user.email && (
                <Image
                  source={{uri: authContextData.user.photoURL}}
                  style={styles.profilePicture}
                />
              )}
            </View>
            <View style={styles.alignment}>
              {userProfile && userEmail === authContextData.user.email && (
                <Text style={styles.appName}>{userProfile.author}</Text>
              )}
              {userProfile && userEmail !== authContextData.user.email && (
                <Text style={styles.appName}>
                  {authContextData.user.displayName}
                </Text>
              )}
              <Text style={styles.headText}>
                Weave your Imagination into Words
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>0 Following</Text>
                <Text style={styles.textStyle}>0 Followers</Text>
              </View>
              {authContextData.user.email !== userEmail && (
                <>
                  <View>
                    <Text style={styles.textStyle}>Follow</Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default profileHeader;
