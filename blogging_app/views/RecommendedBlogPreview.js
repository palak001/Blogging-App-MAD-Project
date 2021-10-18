import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const recommendedBlogPreview = ({blog}) => {
  const contextAuth = useContext(authContext);
  return (
    <TouchableOpacity style={styles.smallPreview}>
      <View style={{paddingTop: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.verySmallProfile}
            source={{uri: contextAuth.user.photoURL}}
          />
          <Text style={styles.commentTxt}>Palak </Text>
          <Text style={styles.smallTxt}> • </Text>
          <Text style={styles.commentTxt}> {blog.date}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '60%'}}>
            <Text style={styles.smallTitle}>{blog.title}</Text>
          </View>
          <View>
            <Image style={styles.smallPreviewImage} source={{uri: blog.url}} />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="bookmark-o"
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
    </TouchableOpacity>
  );
};

export default recommendedBlogPreview;
