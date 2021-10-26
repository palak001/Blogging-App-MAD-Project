import React, {useState, useContext} from 'react';
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

const Options = [
  {
    id: 1,
    name: 'Sign Out',
  },
  {
    id: 2,
    name: 'Update profile',
  },
];

const profileHeader = () => {
  const authContextData = useContext(authContext);
  const themeContextData = useContext(themeContext);
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);

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
                  <FlatList
                    data={Options}
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
    </TouchableWithoutFeedback>
  );
};

export default profileHeader;
