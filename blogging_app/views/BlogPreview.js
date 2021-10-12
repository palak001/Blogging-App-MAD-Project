import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const blogPreview = ({blog}) => {
  const context = useContext(authContext);
  return (
    <View style={styles.preview}>
      <View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.smallProfile}
              source={{uri: context.user.photoURL}}
            />
            <Text style={styles.commentTxt}>{blog.date}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>{blog.title}</Text>
      </View>
      <View>
        <Image
          style={styles.previewImage}
          source={{uri: context.user.photoURL}}
        />
      </View>
      <View>
        <Text style={styles.commentTxt}>{blog.content}</Text>
      </View>
      <View>
        <Text style={styles.commentTxt}>Read more...</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon name="heart" size={20} color="#eca72c" style={styles.icon} />
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="share-alt"
            size={20}
            color="#eca72c"
            style={styles.icon}
          />
          <Icon
            name="ellipsis-h"
            size={20}
            color="#eca72c"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default blogPreview;
