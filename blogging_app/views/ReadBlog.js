import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import writeBlogStyles from '../styles/writeBlogStyles';
import ShowBlog from './ShowBlog';

const renderItem = ({item}) => {
  return <ShowBlog item={item} />;
};

const readBlog = ({route, navigation}) => {
  const [blog, setBlog] = useState({});
  const [authorData, setAuthorData] = useState({});
  const Data = [{id: 1, blog, authorData}];

  useEffect(() => {
    if (route.params) {
      setBlog(route.params.blog);
      setAuthorData(route.params.authorData);
    }
  }, [route]);

  return (
    <View style={writeBlogStyles.outerView}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        navigation={navigation}
        contentContainerStyle={{
          flexGrow: 2,
        }}
        ListFooterComponent={
          <View style={{height: heightPercentageToDP(30)}} />
        }
      />
    </View>
  );
};

export default readBlog;
