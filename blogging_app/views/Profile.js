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
  const [blogList, setBlogList] = useState([]);

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
      },
      {onlyOnce: true},
    );
  }, [route]);

  useEffect(() => {
    const blogRef = ref(database, 'user-blogs');
    const userObj = userProfile;
    onValue(
      blogRef,
      async snapshot => {
        const completeBlogList = snapshot.val();
        if (userObj && userObj.user) {
          setBlogList(completeBlogList[`${userObj.user.userId}`]);
        }
      },
      {onlyOnce: true},
    );
  }, [userProfile]);

  useEffect(() => {
    let newArray = [...Data];
    let userObj = userProfile;
    newArray[0].authorEmail = userObj.email;
    setData(newArray);
    if (blogList) {
      const blogKeys = Object.keys(blogList);
      const allBlogsRef = ref(database, 'all-blogs');

      onValue(
        allBlogsRef,
        snap => {
          const allBlogList = snap.val();
          // console.log('all blog list: ', allBlogList);
          blogKeys.map(key => {
            let obj = allBlogList[`${key}`];
            obj['id'] = key;
            setData([...Data, obj]);
          });
        },
        {onlyOnce: true},
      );
    }
  }, [blogList, userProfile]);

  return (
    // {Data[0].postId !== 0 && (
    <View style={styles.outerView}>
      {/* Your profile */}
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.postId}
        navigation={navigation}
      />
    </View>
    // )}
  );
};

export default profile;
