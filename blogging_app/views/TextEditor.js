import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import textEditorStyles from '../styles/textEditorStyles';
import {lgrey, marigold} from '../styles/theme';

const textEditor = () => {
  const [blog, setBlog] = useState('');

  return (
    <View style={textEditorStyles.outerView}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity>
          <Text style={textEditorStyles.textStyle}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log(blog)}>
          <Text style={textEditorStyles.textStyle}>Publish</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={textEditorStyles.editor}
          selectionColor={marigold}
          autoFocus={true}
          autoCapitalize="sentences"
          multiline={true}
          onChangeText={setBlog}
          value={blog}
        />
      </View>
    </View>
  );
};

export default textEditor;
