import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import writeBlogStyles from '../styles/writeBlogStyles';
import blogStyles from '../styles/blogStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const renderItem = ({item}) => {
  const authorData = item.authorData;
  const blog = item.blog;
  const likedStatus = false;
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
          <View
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
          </View>
          <View
            style={{flexDirection: 'row', paddingRight: 10, paddingTop: 10}}>
            <View
              style={{
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              {likedStatus && (
                <TouchableOpacity onPress={() => handleLikedStatus()}>
                  <Icon
                    name="heart"
                    size={15}
                    color="#eca72c"
                    style={blogStyles.icon}
                  />
                </TouchableOpacity>
              )}
              {!likedStatus && (
                <TouchableOpacity onPress={() => handleLikedStatus()}>
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
              <Text style={blogStyles.commentTxt}>{blog.likes} likes</Text>
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
          <Text style={writeBlogStyles.blogText}>{blog.body}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const readBlog = ({route, navigation}) => {
  const [blog, setBlog] = useState({});
  const [authorData, setAuthorData] = useState({});
  const Data = [{id: 1, blog, authorData}];
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

  useEffect(() => {
    if (route.params) {
      setBlog(route.params.blog);
      setAuthorData(route.params.authorData);
    }
  }, []);

  return (
    <View style={writeBlogStyles.outerView}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        navigation={navigation}
        contentContainerStyle={{
          flexGrow: 2,
        }}
        ListFooterComponent={<View style={{height: 30}} />}
      />
    </View>
  );
};

export default readBlog;
