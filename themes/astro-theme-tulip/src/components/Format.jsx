import React from 'react';
import StoryCard from '@components/StoryCard';

function FormatPage({ data }) {
  const filteredPosts = data.posts.nodes.filter((post) => post.published_date !== null);
  return (
    <>
      <div sx={{ mx: 'auto', maxWidth: 1560 }} className='mx-auto max-w-[1560px]'>
        <h1
          sx={{
            mt: (theme) => `${theme.space.layout4}`,
            mb: (theme) => `${theme.space.layout2}`,
            px: (theme) => theme.space.layout2,
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
          }}
          className='mt-layout4 mb-layout2 px-layout2 text-h5 sm:text-h4'
        >
          {filteredPosts[0]?.format.name}
        </h1>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
            pt: [null, null, null, (theme) => `${theme.space.spacing7}`],
          }}
          className='flex flex-col pb-spacing6 lg:pt-spacing7'
        >
          {filteredPosts.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                px: [null, null, (theme) => `${theme.space.spacing6}`],
                mt: (theme) => `${theme.space.spacing7}`,
                gridGap: (theme) => `${theme.space.spacing7}`,
              }}
              className='grid grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] md:px-spacing6 mt-spacing7 gap-spacing7'
            >
              {filteredPosts.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="tulip"
                  storyData={item}
                  excerpt={item.format.slug !== 'fact-check'}
                />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }} className='text-center'>No posts found</h2>
          )}
        </div>
      </div>
    </>
  );
}
export default FormatPage;
