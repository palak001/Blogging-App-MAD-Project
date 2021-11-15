import React, {useRef, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import HTMLView from 'react-native-htmlview';
import styles from '../styles/textEditorStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {lgrey, marigold, bg} from '../styles/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {authContext} from '../Context/AuthContext';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set, push, child, update} from 'firebase/database';
import firebaseConfig from '../firebaseConfig';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';

const editorScreen = () => {
  const navigation = useNavigation();
  const context = useContext(authContext);

  const RichText = useRef();

  // const [article, setArticle] = useState("");
  const [blog, setBlog] = useState({
    title: '',
    blogText: '',
  });

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  const getCurrentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    console.log('Date: ', date + '-' + month + '-' + year);
    return date + '-' + month + '-' + year; //format: dd-mm-yyyy;
  };

  const uploadBlog = () => {
    const userId = context.user.uid;
    const uName = context.user.displayName;
    const postId = uuid.v4();
    const uEmail = context.user.email;

    try {
      const postData = {
        authorEmail: uEmail,
        userId: userId,
        body: blog.blogText,
        title: blog.title,
        likes: 0,
        imageURL:
          'https://s167.daydaynews.cc/?url=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12009452680%2F1000',
        date: getCurrentDate(),
        postId: postId,
      };

      const newPostKey = push(
        child(ref(database), 'blogs/' + userId + '/posts/'),
      ).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/all-blogs/' + newPostKey] = postData;
      updates['/user-blogs/' + userId + '/' + newPostKey] = postId;
      update(ref(database), updates);

      //add some popup message
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Your post has successfully been published :)'
      });

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Some error occurred :('
      });
    }
  };

  const editorInitializedCallback = () => {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        'Toolbar click, selected items (insert end callback):',
        items,
      );
    });
  };

  const onPressAddImage = () => {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
    );
  };
  return (
    <ScrollView style={{backgroundColor: bg}}>
      <View
        style={{
          backgroundColor: bg,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="angle-left"
            size={hp(4.5)}
            color={marigold}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => uploadBlog()}>
          <Text style={styles.textStyle}>Publish</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Add a Title..."
        placeholderTextColor="#eca72c"
        style={styles.title}
        onChangeText={e => {
          setBlog({...blog, title: e});
          console.log(blog);
        }}
      />

      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={'Start Writing Here'}
        onChange={e => {
          setBlog({...blog, blogText: e});
          console.log(blog);
        }}
        editorInitializedCallback={editorInitializedCallback}
        editorStyle={styles.contentStyle}
        useContainer={false}
      />
      <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={bg}
        selectedIconTint={lgrey}
        disabledIconTint={bg}
        onPressAddImage={onPressAddImage}
        iconSize={hp(2)}
        actions={[
          actions.keyboard,
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.removeFormat,
          actions.heading1,
          actions.heading2,
          actions.insertBulletsList,
          actions.insertOrderedList,
          // actions.insertImage,
          actions.undo,
          actions.redo,
          actions.insertLink,
        ]}
        // // map icons for self made actions
        iconMap={{
          [actions.heading1]: () => <Text style={[styles.tib]}>H1</Text>,
          [actions.heading2]: () => <Text style={[styles.tib]}>H2</Text>,
        }}
      />

      {/* <HTMLView value={article} stylesheet={textEditorStyles} /> */}
    </ScrollView>
  );
};

export default editorScreen;
