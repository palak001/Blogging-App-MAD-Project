import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import textEditorStyles from '../styles/textEditorStyles';
import {lgrey, marigold} from '../styles/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const textEditor = () => {
  const [blog, setBlog] = useState('');
  const [image, setImage] = useState(null);
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              ImagePicker.openPicker({
                width: wp(100),
                height: hp(35),
                cropping: true,
              }).then(image => {
                setImage(image.path);
              });
            }}>
            <Icon name="picture-o" size={25} color="#eca72c" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log(blog)}>
            <Text style={textEditorStyles.textStyle}>Publish</Text>
          </TouchableOpacity>
        </View>
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

      <View>
        {image && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 0,
              right: 5,
              padding: 5,
              zIndex: 1,
            }}
            onPress={() => setImage(null)}>
            <Text style={{color: '#A9A9A9'}}>X</Text>
          </TouchableOpacity>
        )}

        <Image style={{width: '100%', height: hp(35)}} source={{uri: image}} />
      </View>
    </ScrollView>
  );
};

export default textEditor;
