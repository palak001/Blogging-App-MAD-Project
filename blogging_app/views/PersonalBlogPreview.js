import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../Context/AuthContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {marigold} from '../styles/theme';
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
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: hp('2'),
              marginBottom: hp('0.5'),
              color: marigold,
              fontFamily: 'Lato',
              lineHeight: 21,
            }}>
            123456789 likes
          </Text>
        </View>

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
