import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import PostGrid from '@components/PostGrid';
import parseTiptapContent from '@utils/parseTipTapEditorData';

function CategoryDetailsAll({ data }) {
  const [readMore, setReadMore] = React.useState(true);
  const [isReadMoreNeeded, setIsReadMoreNeeded] = useState(false);

  useEffect(() => {
    const el = document.getElementById('category-description');
    setIsReadMoreNeeded(el?.clientHeight < el?.scrollHeight);
  }, []);

  const header = (item) => {
    return (
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
        className="mb-spacing6 text-h6"
      >
        <h1
          sx={{
            fontSize: [
              (theme) => `${theme.fontSizes.h5}`,
              (theme) => `${theme.fontSizes.h4}`,
            ],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
            px: (theme) => theme.space.layout2,
          }}
          className="text-h5 sm:text-h4 mb-spacing5 capitalize px-layout2"
        >
          {item.name}
        </h1>
        <div
          id="category-description"
          sx={{
            maxHeight: (theme) =>
              readMore ? `calc(${theme.lineHeights.normal}em * 6 )` : '100%',
            overflow: 'hidden',
            px: (theme) => `${theme.space.spacing5}`,
          }}
          className={`${
            readMore
              ? 'max-h-[calc(${theme.lineHeights.normal}em*6)]'
              : 'h-full'
          } overflow-hidden px-spacing5`}
        >
          {parseTiptapContent(item.description_html)}
        </div>
        {item.description && isReadMoreNeeded && (
          <button
            type="button"
            onClick={() => setReadMore((prev) => !prev)}
            sx={{
              px: (theme) => `${theme.space.spacing5}`,
              color: (theme) => `${theme.colors.textLinkPrimary}`,
              fontSize: (theme) => `${theme.fontSizes.h6}`,
            }}
            className="px-spacing5 text-textLinkPrimary text-h6"
          >
            {readMore ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>
    );
  };
  return (
    <>
      <PostGrid
        type="category"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.category}
        header={header}
      />
    </>
  );
}

export default CategoryDetailsAll;
