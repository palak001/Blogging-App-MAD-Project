import React, {useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import styles from '../styles/aboutUsStyles'

export default function AboutUs ({navigation}) {
  return (
    <>
      <View style={styles.outerview}>
        <View style={styles.navHeadView}>
          <Icon name='bookmark' size={25} color='#eca72c' />
          <Text style={styles.navAppName}>BLOGUE</Text>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.content}>BLOGUE is developed with </Text>
          <Icon name='heart' size={25} color='#d6d6d6' />
          <Text style={styles.content}> by</Text>
        </View>

        <View style={styles.namesView}>
          <Text style={styles.content}>Palak</Text>
          <Text style={styles.content}>11912006 CS-A1</Text>
          <Text style={styles.content}> </Text>
          <Text style={styles.content}>Aarushi Vohra</Text>
          <Text style={styles.content}>11912004 CS-A1</Text>
          <Text style={styles.content}> </Text>
          <Text style={styles.content}>5th Semester</Text>
          <Text style={styles.content}>B.Tech Computer Engineering</Text>
        </View>
      </View>
    </>
  )
}
