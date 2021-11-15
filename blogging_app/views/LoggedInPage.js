import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useContext} from 'react/cjs/react.development';
import {authContext} from '../Context/AuthContext';
import blogStyles from '../styles/blogStyles';
import homeStyles from '../styles/homeStyles';
import loggedInPageStyles from '../styles/loggedInPageStyles';
import RecommendedBlogPreview from './RecommendedBlogPreview';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

const renderItem = ({item}) => {
  return <RecommendedBlogPreview blog={item} />;
};

const LoggedInPage = ({navigation}) => {
  const contextAuth = useContext(authContext);
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const [recommendedBlogs, setRecommendedBlogs] = useState([]);

  useEffect(() => {
    const blogRef = ref(database, 'all-blogs');
    onValue(
      blogRef,
      snapshot => {
        const Data = [];
        const blogList = snapshot.val();
        if (blogList) {
          Object.keys(blogList).map(data => {
            let obj = blogList[data];
            obj['id'] = data;
            return Data.push(obj);
          });
        }
        setRecommendedBlogs(Data);
      },
      {onlyOnce: true},
    );
  }, []);

  return (
    <View style={loggedInPageStyles.outerView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon name="navicon" size={25} color="#eca72c" />
        <View style={homeStyles.navHeadView}>
          <Icon name="bookmark" size={20} color="#eca72c" />
          <Text style={homeStyles.navAppName}>BLOGUE</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Profile', {userEmail: contextAuth.user.email})
          }>
          <Image
            style={blogStyles.smallProfile}
            source={{uri: contextAuth.user.photoURL}}
          />
        </TouchableOpacity>
      </View>

      <Text style={blogStyles.commentTxt2}>Recommended Posts</Text>

      <FlatList
        data={recommendedBlogs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        navigation={navigation}
      />

      <TouchableOpacity
        style={loggedInPageStyles.createPost}
        // basic text editor
        // onPress={() => navigation.navigate('WriteBlog')}>
        // {/* // Rich text editor  */}
        onPress={() => navigation.navigate('TextEditor')}>
        <Icon name="pencil-square-o" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default LoggedInPage;
