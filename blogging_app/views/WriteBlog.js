import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/writeBlogStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../Context/AuthContext';
import { initializeApp} from "firebase/app";
import { getDatabase, ref, set, push, child, update } from "firebase/database"
import firebaseConfig from '../firebaseConfig';
import uuid from 'react-native-uuid';


const writeBlog = ({navigation}) => {

  const context = useContext(authContext);
  // console.log(context);

  const [blog, setBlog] = useState({
    title : "", 
    blogText : ""
  });


  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  const uploadBlog = () => {
    const userId = context.user.uid;
    const uName = context.user.displayName;
    const postId = uuid.v4()


    try{

      const postData = {
        author: uName,
        userId: userId,
        body: blog.blogText,
        title: blog.title,
        likes: 0
      };

      const newPostKey = push(child(ref(database), 'blogs/'+userId+'/posts/')).key;
      
      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/all-blogs/' + newPostKey] = postData;
      updates['/user-blogs/' + userId + '/' + newPostKey] = postId;
      update(ref(database), updates);

      //add some popup message
      navigation.navigate('Home');

    } catch (error) {
      console.log(error);
    }
    

  }

  return (
    <View style={styles.outerView}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="angle-left" size={45} color="#eca72c" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.headView}>
        <Icon name="bookmark" size={45} color="#eca72c" />
        <Text style={styles.headText}>Write a Blog</Text>
      </View>

      {context.user && (
        <>
          <View style={styles.group}>
            <TextInput
              placeholder="Add a Title..."
              placeholderTextColor='#eca72c'
              style={styles.title}
              onChangeText={(e) => {
                setBlog({...blog, title : e})
                console.log(blog);
              }}
            />

            <TextInput
              placeholder="Pen down your thoughts here"
              placeholderTextColor='#d6d6d6'
              style={styles.blogText}
              multiline={true}
              onChangeText={(e) => {
                setBlog({...blog, blogText : e})
                console.log(blog);
                
              }}
              
            />

            <TouchableOpacity
              style={styles.btn1}
              onPress={() => uploadBlog()}>
              <Text style={styles.text1}>Upload</Text>
            </TouchableOpacity>

          </View>
        </>
      )}
    </View>
  );
};

export default writeBlog;
