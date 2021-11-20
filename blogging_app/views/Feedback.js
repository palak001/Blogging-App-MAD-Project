import React, {useEffect, useState, useContext, useRef} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native'
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import styles from '../styles/feedbackStyles'
import {lgrey, marigold, bg} from '../styles/theme'
import {useNavigation} from '@react-navigation/native'
import {initializeApp} from 'firebase/app'
import {getDatabase, ref, set, push, child, update} from 'firebase/database'
import {authContext} from '../Context/AuthContext'
import firebaseConfig from '../firebaseConfig'
import uuid from 'react-native-uuid'
import Toast from 'react-native-toast-message'

export default function Feedback () {
  const navigation = useNavigation()
  const context = useContext(authContext)
  const RichText = useRef()

  const [feedback, setFeedback] = useState()

  const firebaseApp = initializeApp(firebaseConfig)
  const database = getDatabase(firebaseApp)

  const getCurrentDate = () => {
    let date = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()

    console.log('Date: ', date + '-' + month + '-' + year)
    return date + '-' + month + '-' + year //format: dd-mm-yyyy;
  }

  const editorInitializedCallback = () => {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log('Toolbar click, selected items (insert end callback):', items)
    })
  }

  const sendFeedback = () => {
    const userId = context.user.uid
    const uEmail = context.user.email
    const feedbackId = uuid.v4()

    try {
      const feedbackData = {
        authorEmail: uEmail,
        userId: userId,
        date: getCurrentDate(),
        feedbackId: feedbackId,
        content: feedback
      }

      const newFeedbackKey = push(child(ref(database), 'feedbacks/' + userId))
        .key

      const updates = {};
      updates['/feedbacks/' + newFeedbackKey] = feedbackData;
      update(ref(database), updates);

      //add some popup message
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Feedback successfully sent :)',
      })

      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Some error occurred :(',
      })
    }
  }

  return (
    <>
      <ScrollView style={{backgroundColor: bg}}>
        <View
          style={{
            backgroundColor: bg,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name='angle-left'
              size={hp(4.5)}
              color={marigold}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sendFeedback()}>
            <Text style={styles.textStyle}>Send</Text>
          </TouchableOpacity>
        </View>

        <RichEditor
          disabled={false}
          containerStyle={styles.editor}
          ref={RichText}
          style={styles.rich}
          placeholder={'Start writing feedback here'}
          onChange={e => {
            setFeedback(e)
            console.log(feedback)
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
        //   onPressAddImage={onPressAddImage}
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
    </>
  )
}
