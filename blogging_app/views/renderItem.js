import React from 'react';
import ProfileHeader from './ProfileHeader';
import BlogPreview from './BlogPreview';

const renderItem = ({item}) => {
  if (item.id == 0) {
    return <ProfileHeader />;
  } else {
    return <BlogPreview blog={item} />;
  }
};

export default renderItem;
