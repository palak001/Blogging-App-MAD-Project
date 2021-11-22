import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native';
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
import SideDrawer from '../components/SideDrawer';
import MyText from '../components/MyText';

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

  const [drawer, setdrawer] = useState(false);

  const toggleOpen = () => {
    const drawerVal = drawer == false ? true : false;
    setdrawer(drawerVal);
    // console.log(drawer)
  };

  const drawerContent = () => {};

  return (
    <>
      {drawer === true ? (
        <SideDrawer onCloseDrawer={() => setdrawer(false)} />
      ) : (
        <></>
      )}

      <View
        style={[
          loggedInPageStyles.outerView,
          drawer ? {opacity: 0.8} : {opacity: 1},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => toggleOpen()}>
            <Icon name="navicon" size={25} color="#eca72c" />
          </TouchableOpacity>

          <View style={homeStyles.navHeadView}>
            <Icon name="bookmark" size={20} color="#eca72c" />
            <Text style={homeStyles.navAppName}>BLOGUE</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {
                userEmail: contextAuth.user.email,
              })
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

        {!drawer ? (
          <TouchableOpacity
            style={loggedInPageStyles.createPost}
            onPress={() => navigation.navigate('TextEditor')}>
            <Icon name="pencil-square-o" size={25} />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default LoggedInPage;
