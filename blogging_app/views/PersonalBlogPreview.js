import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../Context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const blogPreview = ({blog}) => {
  const contextAuth = useContext(authContext);
  return (
    <View style={styles.preview}>
      <View style={{paddingTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.verySmallProfile}
              source={{uri: contextAuth.user.photoURL}}
            />
            <Text style={styles.commentTxt}>{blog.date}</Text>
          </View>
        </View>
        <Text style={styles.title}>{blog.title}</Text>
      </View>
      <View>
        <Image style={styles.previewImage} source={{uri: blog.url}} />
      </View>
      <View>
        <Text style={styles.commentTxt}>{blog.content}</Text>
      </View>
      <View>
        <Text style={styles.commentTxt}>Read more...</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon name="heart-o" size={20} color="#eca72c" style={styles.icon} />
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
