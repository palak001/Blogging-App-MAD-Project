import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../styles/blogStyles';
import {authContext} from '../context/AuthContext';

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
          {/* <View>
            <Text></Text>
            <Text style={styles.commentTxt}>{blog.date}</Text>
          </View> */}
        </View>
      </View>
      <View>
        <Text style={styles.title}>{blog.title}</Text>
      </View>
      <View>
        <Image
          style={styles.previewImage}
          source={{uri: context.user.photoURL}}

          // source={{
          //   uri: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
          // }}
        />
      </View>
      <View>
        <Text style={styles.commentTxt}>{blog.content}</Text>
      </View>
    </View>
  );
};

export default blogPreview;
