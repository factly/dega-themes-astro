import React from 'react'; // eslint-disable-line no-unused-vars
import StoryCard from './StoryCard';

const PostGrid = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item.slug : item.id;
  const filteredPosts = posts.filter((post) => post.published_date !== null);
  const defaultHeader = (item) => (
    <header>
      <h1
        sx={{
          fontSize: [(theme) => `${theme.fontSizes.h5}`, null, (theme) => `${theme.fontSizes.h4}`],
          mb: (theme) => `${theme.space.spacing5}`,
          textTransform: 'capitalize',
          px: (theme) => theme.space.layout2,
        }}
        className='text-h5 md:text-h4 mb-spacing5 capitalize px-layout2'
      >
        {item.name}
      </h1>
      {item?.description && <p>{item.description}</p>}
    </header>
  );
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        justifyContent: 'space-between',
        borderBottomWidth: [null, null, null, 'px'],
      }}
      className='flex flex-col md:flex-row justify-between  md:border-b-px'
    >
      <div
        className="main-content order-2 lg:order-1 max-w-[1560px] w-full mx-auto"
        sx={{ order: [2, null, null, null, 1], maxWidth: 1560, width: '100%', mx: 'auto' }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
          }}
          className='flex flex-col pb-spacing6'
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
    </div>
  );
};

export default PostGrid;
