import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import writeBlogStyles from '../styles/writeBlogStyles';
import blogStyles from '../styles/blogStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue, update} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';
import {useContext} from 'react/cjs/react.development';
import {authContext} from '../Context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from '../styles/theme';

const showBlog = ({item}) => {
  const authContextData = useContext(authContext);
  const authorData = item.authorData;
  const navigation = useNavigation();
  const blog = item.blog;
  const [finalBlog, setFinalBlog] = useState('');
  const [likedStatus, setLikedStatus] = useState(false);
  const [likesCount, setLikesCount] = useState();
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const userRef = ref(database, 'users');
  const loggedInUserEmail = authContextData.user.email.replace(/\./g, ',');
  const [likeButtonDisabled, setLikeButtonDisabled] = useState(false);

  const handleLikedStatus = async () => {
    setLikeButtonDisabled(true);
    if (likedStatus) {
      await onValue(
        userRef,
        snapshot => {
          const userList = snapshot.val();
          const likedPostList = userList[loggedInUserEmail].likedPosts;
          if (likedPostList && likedPostList.includes(`${blog.id}`)) {
            const index = likedPostList.indexOf(`${blog.id}`);
            if (index >= 0) {
              likedPostList.splice(index, 1);
            }
            const updates = {};
            updates['/users/' + loggedInUserEmail + '/likedPosts'] =
              likedPostList;

            update(ref(database), updates);
          }
        },
        {onlyOnce: true},
      );
      setLikedStatus(false);
      updateLikesCount(Math.max(0, likesCount - 1));
    } else {
      await onValue(
        userRef,
        snapshot => {
          const userList = snapshot.val();
          const likedPostList = userList[loggedInUserEmail].likedPosts;

          if (likedPostList && !likedPostList.includes(`${blog.id}`)) {
            likedPostList.push(`${blog.id}`);
            const updates = {};
            updates['/users/' + loggedInUserEmail + '/likedPosts'] =
              likedPostList;
            update(ref(database), updates);
          }
        },
        {onlyOnce: true},
      );
      setLikedStatus(true);
      updateLikesCount(likesCount + 1);
    }
    setLikeButtonDisabled(false);
  };

  const updateLikesCount = val => {
    setLikesCount(val);
    const updates = {};
    updates['/all-blogs/' + blog.id + '/likes'] = val;
    update(ref(database), updates);
  };

  useEffect(() => {
    if (item && Object.keys(item.authorData).length !== 0) {
      onValue(
        userRef,
        snapshot => {
          const userList = snapshot.val();
          const likedPostList = userList[loggedInUserEmail].likedPosts;
          // console.log(likedPostList.includes(`${blog.id}`));
          if (likedPostList && !likedPostList.includes(`${blog.id}`)) {
            setLikedStatus(false);
          } else setLikedStatus(true);
        },
        {
          onlyOnce: true,
        },
      );
    }
  }, [item]);

  useEffect(() => {
    if (item && Object.keys(item.authorData).length !== 0) {
      let newBlog = '<div>' + item.blog.body + '</div>';
      setFinalBlog(newBlog);
      const blogRef = ref(database, 'all-blogs');
      onValue(
        blogRef,
        snapshot => {
          const blogList = snapshot.val();
          const blog = blogList[`${item.blog.id}`];
          if (blog) {
            setLikesCount(blog.likes);
          }
        },
        {onlyOnce: true},
      );
    }
  }, [item]);

  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={() => {}}>
      <View style={writeBlogStyles.group}>
        <View style={{paddingTop: 15}}>
          <Text style={writeBlogStyles.title}>{blog.title}</Text>
        </View>
        <View
          style={{
            width: '90%',
            paddingTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile', {
                userEmail: blog.authorEmail,
              });
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={blogStyles.verySmallProfile}
              source={{uri: authorData.photoUrl}}
            />
            <Text style={writeBlogStyles.label}>{authorData.author} </Text>
            <Text style={blogStyles.smallTxt}> • </Text>
            <Text style={blogStyles.commentTxt}> {blog.date}</Text>
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', paddingRight: 10, paddingTop: 10}}>
            <View
              style={{
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              {likedStatus && (
                <TouchableOpacity
                  disabled={likeButtonDisabled}
                  onPress={() => handleLikedStatus()}>
                  <Icon
                    name="heart"
                    size={15}
                    color="#eca72c"
                    style={blogStyles.icon}
                  />
                </TouchableOpacity>
              )}
              {!likedStatus && (
                <TouchableOpacity
                  disabled={likeButtonDisabled}
                  onPress={() => handleLikedStatus()}>
                  <Icon
                    name="heart-o"
                    size={15}
                    color="#eca72c"
                    style={blogStyles.icon}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View>
              <Text style={blogStyles.commentTxt}>{likesCount} likes</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Image
            source={{uri: blog.imageURL}}
            style={blogStyles.previewImage}
          />
        </View>
        <View
          style={{
            paddingTop: 30,
          }}>
          <Text style={{color: lgrey}}>
            {<HTMLView value={finalBlog} stylesheet={styles} />}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default showBlog;

const styles = StyleSheet.create({
  div: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(2.75),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    width: wp('90'),
  },
  img: {
    height: hp(30),
    width: wp(90),
  },
  p: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(2.75),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    width: wp('90'),
  },
  ol: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(2.75),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    width: wp('90'),
  },
  ul: {
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(2.75),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    width: wp('90'),
  },
  h1: {
    width: wp('90'),
    // height: hp('50'),
    borderRadius: hp('1.5'),
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(4),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    fontWeight: 'bold',
  },
  h2: {
    width: wp('90'),
    // height: hp('50'),
    borderRadius: hp('1.5'),
    color: lgrey,
    fontFamily: 'Lato',
    fontSize: hp(3.25),
    lineHeight: hp(4.5),
    textAlignVertical: 'top',
    fontWeight: 'bold',
  },
  // a: {
  //   fontWeight: 'bold',
  //   color: bg,
  // },
  // div: {
  //   fontFamily: 'monospace',
  // },
  // p: {
  //   fontSize: hp(4),
  // },
});
