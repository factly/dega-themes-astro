import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import PostGrid from '@components/PostGrid';

function TagDetailsAll({ data }) {
  const header = (item) => {
    return (
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
        className='mb-spacing6 text-h6'
      >
        <h1
          sx={{
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
            px: (theme) => theme.space.layout2,
          }}
          className='text-h5 sm:text-h4 mb-spacing5 capitalize px-layout2'
        >
          {item.name}
        </h1>
      </div>
    );
  };
  return (
    <>
      <PostGrid
        type="tag"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.tag}
        header={header}
      />
    </>
  );
}

export default TagDetailsAll;