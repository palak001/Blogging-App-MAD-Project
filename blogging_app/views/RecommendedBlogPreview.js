import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/blogStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

const recommendedBlogPreview = ({blog}) => {
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const [authorData, setAuthorData] = useState({});

  console.log('blog', blog);
  useEffect(() => {
    const email = blog['authorEmail'].replace(/\./g, ','); // replaced . by ,
    console.log('email', email);
    const userRef = ref(database, 'users/' + email);
    onValue(userRef, snapshot => {
      setAuthorData(snapshot.val());
    });
  }, [onValue]);
  return (
    <TouchableOpacity style={styles.smallPreview}>
      <View style={{paddingTop: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.verySmallProfile}
            source={{uri: authorData.photoUrl}}
          />
          <Text style={styles.commentTxt}>{authorData.author} </Text>
          <Text style={styles.smallTxt}> • </Text>
          <Text style={styles.commentTxt}> {blog.date}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '60%'}}>
            <Text style={styles.smallTitle}>{blog.title}</Text>
          </View>
          <View>
            <Image
              style={styles.smallPreviewImage}
              source={{uri: blog.imageURL}}
            />
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
