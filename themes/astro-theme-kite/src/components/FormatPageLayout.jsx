import React from 'react'; // eslint-disable-line no-unused-vars
import StoryCard from './UI/StoryCard';
import { parseTiptapContent } from '@helpers/parseTiptapContent';

const FormatPageLayout = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item?.slug : item?.degaId;
  const filteredPosts = posts.filter((post) => post.published_date !== null);
  const defaultHeader = (item) => (
    <>
      <h1
        sx={{
          textAlign: 'center',
          fontSize: [(theme) => `${theme.fontSizes.h5}`, null, (theme) => `${theme.fontSizes.h4}`],
          mb: (theme) => `${theme.space.spacing5}`,
          textTransform: 'capitalize',
        }}
        className='text-center text-[1.5rem] md:text-[2rem] mb-5 capitalize'
      >
        {item?.name}
      </h1>

      <div
        id="category-description"
        sx={{
          maxHeight: '100%',
          overflow: 'hidden',
          px: (theme) => `${theme.space.spacing5}`,
        }}
        className='max-h-full overflow-hidden px-5'
      >
        {parseTiptapContent(item?.description)}
      </div>
    </>
  );
  return (
    <>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', null, null, 'row'],
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
        }}
        className='flex flex-col lg:flex-row justify-between lg:border-b border-gray-200'
      >
        <div
          className="main-content order-2 xl:order-1 max-w-[1560px] w-full mx-auto"
          sx={{ order: [2, null, null, null, 1], maxWidth: 1560, width: '100%', mx: 'auto' }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pb: (theme) => `${theme.space.spacing6}`,
            }}
            className='flex flex-col pb-5'
          >
            {header ? header(item) : defaultHeader(item)}

            {filteredPosts.length > 0 ? (
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                  px: [null, null, (theme) => `${theme.space.spacing6}`],
                  mt: (theme) => `${theme.space.spacing7}`,
                  gridGap: (theme) => `${theme.space.spacing7}`,
                }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 mt-8 gap-8'
              >
                {filteredPosts.map((item, index) => (
                  <StoryCard key={index} type="basic" post={item} />
                ))}
              </div>
            ) : (
              <h2 sx={{ textAlign: 'center' }} className='text-center'>No posts found</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormatPageLayout;
