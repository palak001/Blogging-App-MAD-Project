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

  const uploadBlog = () => {
    const userId = context.user.uid;
    const uName = context.user.displayName;
    const postId = uuid.v4();

    try {
      const postData = {
        author: uName,
        userId: userId,
        body: blog.blogText,
        title: blog.title,
        likes: 0,
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
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
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
        iconSize={hp(4)}
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
          actions.insertImage,
          actions.undo,
          actions.redo,
          actions.insertLink,
        ]}
        // map icons for self made actions
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
