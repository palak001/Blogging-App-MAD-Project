import React, {useRef, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const RichText = useRef();
  const scrollRef = useRef();
  const [blog, setBlog] = useState({
    title: '',
    blogText: '',
  });
  const [imageLink, setImageLink] = useState(
    'https://cdn.vox-cdn.com/thumbor/Jb2X5lJUrIJtKw9eI3hbSYurZyU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22449912/DS_Still_21.jpg',
  );
  const [imagePreviewLink, setImagePreviewLink] = useState(
    'https://i.pinimg.com/564x/2b/3f/57/2b3f5792a11d57dd6e8d2691493c23e8.jpg',
  );
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  const getCurrentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
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
        imageURL: imagePreviewLink,
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
        text2: 'Your post has successfully been published :)',
      });

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Some error occurred :(',
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
    setModalVisible(true);
    console.log('Model show: ');
  };

  handleCursorPosition = scrollY => {
    // Positioning scroll bar
    scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
  };

  return (
    <ScrollView
      // stickyHeaderIndices={[0]}
      ref={scrollRef}
      nestedScrollEnabled={true}
      scrollEventThrottle={20}
      style={{backgroundColor: bg}}>
      {/* <View style={{height: hp(95)}}> */}
      <View
        style={{
          backgroundColor: bg,
          justifyContent: 'space-between',
          flexDirection: 'row',
          position: 'relative',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="angle-left"
            size={hp(4.5)}
            color={marigold}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModal2Visible(true)}>
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
        iconSize={hp(1.75)}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Enter image link"
              // autoFocus={true}
              selectTextOnFocus={true}
              onChangeText={setImageLink}
              style={{
                width: wp(50),
                borderBottomColor: marigold,
                borderBottomWidth: hp(0.25),
              }}
            />
            <Pressable
              style={styles.btn1}
              onPress={() => {
                console.log(imageLink);
                setModalVisible(!modalVisible);
                // you can easily add images from your gallery
                RichText.current?.insertImage(imageLink);
              }}>
              <Text style={styles.textStyle2}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modal2Visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Enter Preview image link"
              // autoFocus={true}
              selectTextOnFocus={true}
              onChangeText={setImagePreviewLink}
              style={{
                width: wp(50),
                borderBottomColor: marigold,
                borderBottomWidth: hp(0.25),
              }}
            />
            <Pressable
              style={styles.btn1}
              onPress={() => {
                console.log(imagePreviewLink);
                setModalVisible(!modal2Visible);
                uploadBlog();
              }}>
              <Text style={styles.textStyle2}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </ScrollView>
  );
};

export default editorScreen;

// Some image link address you might want to use (Copy-paste doesn't work :(

// https://bit.ly/3CBN3Tp
// https://bit.ly/3oLN8z0
// https://bit.ly/3qWSz0H
// https://bit.ly/3qWTmib
// https://bit.ly/3nDEqDK
// https://bit.ly/30HlbR1
// https://bit.ly/329hO5t
// https://bit.ly/30DdjPX
// https://bit.ly/3CAiP2Z
// https://bit.ly/3oSEMpa
// https://bit.ly/3HIaNJh
// https://bit.ly/3xaqcNv
