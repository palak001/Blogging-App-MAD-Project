import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useContext} from 'react/cjs/react.development';
import {authContext} from '../Context/AuthContext';
import blogStyles from '../styles/blogStyles';
import homeStyles from '../styles/homeStyles';
import loggedInPageStyles from '../styles/loggedInPageStyles';
import RecommendedBlogPreview from './RecommendedBlogPreview';

const Data = [
  {
    id: 1,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 2,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 3,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 4,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 5,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 6,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 7,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 8,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 9,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
  {
    id: 10,
    date: '10 June',
    title: 'The book that fell off the shelf',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-movies-in-order-1598634100.jpg?crop=1.00xw:0.892xh;0,0.0455xh&resize=1200:*',
    content:
      'This is the content of the poem I wrote. This was my first ever poem and I really like the idea, I am not sure if the sentences are good or not.',
  },
];

const renderItem = ({item}) => {
  if (item.id == 0) {
    return <ProfileHeader />;
  } else {
    return <RecommendedBlogPreview blog={item} />;
  }
};

const LoggedInPage = ({navigation}) => {
  const contextAuth = useContext(authContext);
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={blogStyles.smallProfile}
            source={{uri: contextAuth.user.photoURL}}
          />
        </TouchableOpacity>
      </View>

      <Text style={blogStyles.commentTxt2}>Recommended Posts</Text>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        navigation={navigation}
      />

      <TouchableOpacity
        style={loggedInPageStyles.createPost}
        onPress={() => navigation.navigate('TextEditor')}>
        <Icon name="pencil-square-o" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default LoggedInPage;
