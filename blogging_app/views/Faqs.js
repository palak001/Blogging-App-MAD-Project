import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import styles from '../styles/faqsStyles'

export default function AboutUs ({navigation}) {
  const faqs = [
    {
      key: '1',
      ques: 'Do I need to sign up to use blog?',
      ans: 'Yes, it is neccessary to sign up with us to be able to view and publish posts. We do not allow you to post and view anonymously as user authentication is required to maintain the credibility of BLOGUE. We ensure that BLOGUE is a safe place to write your thoughts out.',
    },
    {
      key: '2',
      ques: 'How do I access my profile?',
      ans: 'Once signed in, tap on your profile picture at the top right corner of the screen to access your profile.'
    },
    {
      key: '3',
      ques: 'How to sign out from my account?',
      ans: 'Go to your profile section, tap the menu on the top right corner and choose sign out.'
    },
    {
      key: '4',
      ques: 'How to publish a blog?',
      ans: 'Once signed in, tap the pencil icon on the bottom left corner of the home page. It will redirect you to the text editor. Write your thoughts out, add links and images, add a preview image, and then tap on the publish button to post your blog!'
    },
    {
      key: '5',
      ques: 'Where can I find the blogs that I have published?',
      ans: 'Go to your profile section. Scroll down to find the list of all blogs that you have uploaded in order of the date they were published.'
    },
    {
      key: '6',
      ques: 'How can I send feedback?',
      ans: "Once signed in, tap on the hamburger menu on the top left corner of the home page and select 'send a feedback'. We look forward to your suggestions to improve BLOGUE."
    },
    {
      key: '',
      ques: '',
      ans: ""
    },

  ]

  const list = () => {
    return faqs.map(element => {
      return (
        <View key={element.key} style={styles.element}>
          <Text style={styles.ques}>{element.key}. {element.ques}</Text>
          <Text style={styles.ans}>{element.ans}</Text>
        </View>
      )
    })
  }

  return (
    <>
      <View style={styles.outerview}>
        <View style={styles.navHeadView}>
          <Icon name='bookmark' size={25} color='#eca72c' />
          <Text style={styles.navAppName}>BLOGUE</Text>
        </View>

        <ScrollView style={styles.contentView}>{list()}</ScrollView>
      </View>
    </>
  )
}
