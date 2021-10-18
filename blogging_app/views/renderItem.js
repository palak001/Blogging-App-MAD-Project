import React from 'react';
import ProfileHeader from './ProfileHeader';
import PersonalBlogPreview from './PersonalBlogPreview';

const renderItem = ({item}) => {
  if (item.id == 0) {
    return <ProfileHeader />;
  } else {
    return <PersonalBlogPreview blog={item} />;
  }
};

export default renderItem;
