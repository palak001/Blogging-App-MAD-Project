import React from 'react';
import {View, FlatList} from 'react-native';
import styles from '../styles/profileStyles';
import renderItem from './renderItem';

const Data = [
  {
    id: 0,
  },
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

const profile = ({navigation}) => {
  return (
    <View style={styles.outerView}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        navigation={navigation}
      />
    </View>
  );
};

export default profile;
