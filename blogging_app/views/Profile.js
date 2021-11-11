import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from '../styles/profileStyles';
import ProfileHeader from './ProfileHeader';
import PersonalBlogPreview from './PersonalBlogPreview';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';
import {authContext} from '../Context/AuthContext';

const renderItem = ({item}) => {
  if (item.postId == 0) {
    return <ProfileHeader authorEmail={item.authorEmail} />;
  } else {
    return <PersonalBlogPreview blog={item} />;
  }
};

const profile = ({navigation, route}) => {
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const authContextData = useContext(authContext);
  const [userProfile, setUserProfile] = useState({});
  const [Data, setData] = useState([{postId: 0, authorEmail: ''}]);

  useEffect(() => {
    const user = route.params;
    const userRef = ref(database, 'users');
    const email = user.userEmail.replace(/\./g, ',');
    onValue(
      userRef,
      snapshot => {
        const userList = snapshot.val();
        let userObj = {email: user.userEmail, user: {}};
        if (userList) {
          userObj = {email: user.userEmail, user: userList[email]};
        }
        setUserProfile(userObj);
        const blogRef = ref(database, 'user-blogs');
        onValue(
          blogRef,
          snapshot => {
            const completeBlogList = snapshot.val();

            if (userObj && userObj.user) {
              const blogList = completeBlogList[`${userObj.user.userId}`];
              let newArray = [...Data];
              newArray[0].authorEmail = userObj.email;
              setData(newArray);
              if (blogList) {
                const blogKeys = Object.keys(blogList);
                const allBlogsRef = ref(database, 'all-blogs');

                onValue(
                  allBlogsRef,
                  snap => {
                    const allBlogList = snap.val();
                    blogKeys.map(key => {
                      let obj = allBlogList[`${key}`];
                      obj['id'] = key;
                      setData([...Data, obj]);
                    });
                  },
                  {onlyOnce: true},
                );
              }
            }
          },
          {onlyOnce: true},
        );
      },
      {onlyOnce: true},
    );
  }, [route]);

  return (
    <View style={styles.outerView}>
      {/* Your profile */}
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.postId}
        navigation={navigation}
      />
    </View>
  );
};

export default profile;
