import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../Context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold} from '../styles/theme';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set, push, child, update} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

const blogPreview = ({blog}) => {
  const contextAuth = useContext(authContext);
  const [likedStatus, setLikedStatus] = useState(false);
  const [likesCount, setLikesCount] = useState();
  const handleLikedStatus = () => {
    setLikedStatus(!likedStatus);
    if (likedStatus) {
      setLikedStatus(false);
      updateLikesCount(max(0, likesCount - 1));
    } else {
      setLikedStatus(true);
      updateLikesCount(likesCount + 1);
    }
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  const updateLikesCount = val => {
    database()
      .ref(`notes/`)
      .on('value', function (snapshot) {
        setData(snapshot.val());
      });
  };

  return (
    <View style={styles.preview}>
      <View style={{paddingTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.verySmallProfile}
              source={{uri: contextAuth.user.photoURL}}
            />
            <Text style={styles.commentTxt}>{blog.date}</Text>
          </View>
        </View>
        <Text style={styles.title}>{blog.title}</Text>
      </View>
      <View>
        <Image style={styles.previewImage} source={{uri: blog.url}} />
      </View>
      <View>
        <Text style={styles.commentTxt}>{blog.content}</Text>
      </View>
      <View>
        <Text style={styles.commentTxt}>Read more...</Text>
      </View>
      {/* <View style={{flexDirection: 'column'}}> */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {likedStatus && (
            <TouchableOpacity onPress={() => handleLikedStatus()}>
              <Icon
                name="heart"
                size={20}
                color="#eca72c"
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
          {!likedStatus && (
            <TouchableOpacity onPress={() => handleLikedStatus()}>
              <Icon
                name="heart-o"
                size={20}
                color="#eca72c"
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
          {/* <View> */}
          <Text
            style={{
              fontSize: hp('2'),
              marginBottom: hp('0.5'),
              color: marigold,
              fontFamily: 'Lato',
              lineHeight: 21,
            }}>
            123456789 likes
          </Text>
          {/* </View> */}
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

      {/* </View> */}
    </View>
  );
};

export default blogPreview;
