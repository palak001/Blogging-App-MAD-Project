import React, { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";
import textEditorStyles from '../styles/textEditorStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lgrey, marigold, bg} from '../styles/theme';


const editorScreen = () => {
  const strikethrough = require("../assets/icons/strikethrough-solid.svg");
  const video = require("../assets/icons/video-solid.svg"); 

  const RichText = useRef(); 

  // const [article, setArticle] = useState("");

  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        "Toolbar click, selected items (insert end callback):",
        items
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }


  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }



  return (
    // <ScrollView style={textEditorStyles.container}>
      <ScrollView>
     

      <Text style={textEditorStyles.text}>Editor</Text>
      
      <RichEditor
        disabled={false}
        containerStyle={textEditorStyles.editor}
        ref={RichText}
        style={textEditorStyles.rich}
        placeholder={"Start Writing Here"}
        // onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
        editorStyle={textEditorStyles.contentStyle}
      />
      <RichToolbar
        style={[textEditorStyles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={lgrey}
        selectedIconTint={"#FFFFFF"}
        disabledIconTint={lgrey}
        onPressAddImage={onPressAddImage}
        iconSize={hp(4)}
        actions={[
          "insertVideo",
          ...defaultActions,
          actions.setStrikethrough,
          actions.heading1,
        ]}
        // map icons for self made actions
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[textEditorStyles.tib, { color: tintColor }]}>H1</Text>
          ),
          [actions.setStrikethrough]: strikethrough,
          ["insertVideo"]: video,
        }}
        insertVideo={insertVideo}
      />
      
      {/* <HTMLView value={article} stylesheet={textEditorStyles} /> */}
    </ScrollView>

  );
};


export default editorScreen;

