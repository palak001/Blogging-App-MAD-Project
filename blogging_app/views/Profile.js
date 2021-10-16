import React, {useContext} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/profileStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../Context/AuthContext';
import btnStyles from '../styles/signinStyles';

const profile = ({navigation}) => {
  const context = useContext(authContext);
  // console.log(context);

  return (
    <View style={styles.outerView}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="angle-left" size={45} color="#eca72c" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.innerView}>
        <View style={styles.alignment}>
          <Image
            source={{uri: context.user.photoURL}}
            style={styles.profilePicture}
          />
          <View style={styles.alignment}>
            {/* <Text style={styles.appName}>{context.user.displayName}</Text> */}
            <Text style={styles.appName}>{context.user.displayName}</Text>

            <Text style={styles.headText}>
              Weave your Imagination into Words
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>0 Following</Text>
              <Text style={styles.textStyle}>0 Followers</Text>
            </View>
            <TouchableOpacity
              style={btnStyles.btn1}
              onPress={() => {
                context.signOut();
                navigation.navigate('Home');
              }}>
              <Text style={btnStyles.text1}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;
