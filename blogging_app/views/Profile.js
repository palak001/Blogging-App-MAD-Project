import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '../styles/profileStyles';
import ProfileHeader from './ProfileHeader';
import PersonalBlogPreview from './PersonalBlogPreview';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';
import {authContext} from '../Context/AuthContext';
import {bg, marigold} from '../styles/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const renderItem = ({item}) => {
  if (item.authorEmail !== '') {
    console.log('item.postId: ', item.postId);
    if (item.postId == 0) {
      return <ProfileHeader authorEmail={item.authorEmail} />;
    } else {
      return <PersonalBlogPreview blog={item} />;
    }
  }
};

const profile = ({navigation, route}) => {
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const authContextData = useContext(authContext);
  const [userProfile, setUserProfile] = useState({});
  const [Data, setData] = useState([{postId: 0, authorEmail: ''}]);
  const [blogList, setBlogList] = useState([]);
  const [showComment, setShowComment] = useState(true);

  useEffect(() => {
    const user = route.params;
    const userRef = ref(database, 'users');
    const email = user.userEmail.replace(/\./g, ',');
    onValue(
      userRef,
      snapshot => {
        const userList = snapshot.val();
        let userObj = {email: user.userEmail, user: {}};
        if (userList && userList[email]) {
          userObj = {email: user.userEmail, user: userList[email]};
        }
        setUserProfile(userObj);
        const blogRef = ref(database, 'user-blogs');
        onValue(
          blogRef,
          async snapshot => {
            const completeBlogList = snapshot.val();
            if (userObj && userObj.user) {
              let blogList = [];
              if (completeBlogList) {
                blogList = completeBlogList[`${userObj.user.userId}`];

                if (completeBlogList[`${userObj.user.userId}`])
                  setShowComment(false);
              }

              let newArray = [...Data];
              newArray[0].authorEmail = userObj.email;
              // setData(newArray);
              let blogKeys = [];
              if (blogList) {
                blogKeys = Object.keys(blogList);
              }

              const allBlogsRef = ref(database, 'all-blogs');

              await onValue(
                allBlogsRef,
                snap => {
                  const allBlogList = snap.val();
                  blogKeys.map(key => {
                    let obj = allBlogList[`${key}`];
                    obj['id'] = key;
                    newArray.push(obj);
                    // setData([...Data, obj]);
                  });
                },
                {onlyOnce: true},
              );

              setData(newArray);
            }
          },
          {onlyOnce: true},
        );
      },
      {onlyOnce: true},
    );
  }, [route]);

  return (
    <View
      style={{
        backgroundColor: bg,
        height: hp('100'),
        flex: 1,
        padding: 10,
      }}>
      {Data[0]['authorEmail'] !== '' && (
        <View
          style={{
            justifyContent: 'space-around',
          }}>
          <View>
            {/* Your profile */}

            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.postId}
              navigation={navigation}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingTop: hp(5),
            }}>
            {showComment && (
              <Text
                style={{color: marigold, padding: 10, fontFamily: 'PTSans'}}>
                You don't have any blogs yet!
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default profile;
