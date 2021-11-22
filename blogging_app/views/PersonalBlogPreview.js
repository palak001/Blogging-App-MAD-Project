import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../Context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {marigold, lgrey} from '../styles/theme';
import {useNavigation} from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';
import HTMLView from 'react-native-htmlview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const blogPreview = ({blog}) => {
  const contextAuth = useContext(authContext);
  const [authorData, setAuthorData] = useState();
  const navigation = useNavigation();
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  useEffect(async () => {
    if (blog && blog['authorEmail']) {
      const email = blog['authorEmail'].replace(/\./g, ','); // replaced . by ,
      const userRef = ref(database, 'users/' + email);
      // console.log('blogs: ', blog);
      await onValue(
        userRef,
        snapshot => {
          setAuthorData(snapshot.val());
        },
        {onlyOnce: true},
      );
    }
  }, [blog]);

  return (
    <TouchableOpacity
      style={styles.preview}
      onPress={() => {
        navigation.navigate('ReadBlog', {blog, authorData});
      }}>
      <View style={{paddingTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {authorData && (
              <Image
                style={styles.verySmallProfile}
                source={{uri: authorData.photoUrl}}
              />
            )}

            <Text style={styles.commentTxt}>{blog.date}</Text>
          </View>
        </View>
        <Text style={styles.title}>{blog.title}</Text>
      </View>
      <View>
        <Image
          style={{height: hp(30), width: wp(90)}}
          source={{uri: blog.imageURL}}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: hp('2'),
              marginBottom: hp('0.5'),
              color: marigold,
              fontFamily: 'Lato',
              lineHeight: 21,
            }}>
            {blog.likes} likes
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon
            name="share-alt"
            size={20}
            color="#eca72c"
            style={styles.icon}
          />
          <Icon
            name="ellipsis-h"
            size={20}
            color="#eca72c"
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default blogPreview;

const textStyles = StyleSheet.create({
  div: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(2.75),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    width: wp('90'),
  },

  p: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(2.75),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    width: wp('90'),
  },
});
