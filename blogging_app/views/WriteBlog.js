import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/writeBlogStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authContext} from '../Context/AuthContext';
import firebase from 'firebase/app';

const writeBlog = ({navigation}) => {
  const context = useContext(authContext);
  // console.log(context.user);

  const [blog, setBlog] = useState({
    title : "", 
    blogText : ""
  });


  const uploadBlog = () => {
    console.log('upload blog');
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
