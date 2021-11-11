import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../Context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {marigold} from '../styles/theme';
import {useNavigation} from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

const blogPreview = ({blog}) => {
  const contextAuth = useContext(authContext);
  const [authorData, setAuthorData] = useState();
  const navigation = useNavigation();
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  useEffect(() => {
    if (blog && blog['authorEmail']) {
      const email = blog['authorEmail'].replace(/\./g, ','); // replaced . by ,
      const userRef = ref(database, 'users/' + email);
      onValue(
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
        <Image style={styles.previewImage} source={{uri: blog.imageURL}} />
      </View>
      <View>
        <Text numberOfLines={3} style={styles.commentTxt}>
          {blog.body}
        </Text>
      </View>
      <View>
        <Text style={styles.commentTxt}>Read more...</Text>
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
