import StoryCard from './UI/StoryCard';

const PostGrid = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item.slug : item.id;
  const filteredPosts = posts.filter((post) => post.published_date !== null);

  const defaultHeader = (item) => (
    <header className="c-page-header">
      <div className="l-grid l-grid--2-columns">
        <div>
          <h1 className="c-topper__headline u-font-headline u-font-family-sansSerif">
            {item.name}
          </h1>
          <p className="c-topper__standfirst u-font-standfirst u-mt-8 u-font-family-sansSerif">
            {item.description}
          </p>
        </div>
      </div>
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
      className='flex flex-col lg:flex-row justify-between lg:border-b-px'
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
          className='flex flex-col pb-6'
        >
          {header ? header(item) : defaultHeader(item)}
          {filteredPosts.length > 0 ? (
            <div className="l-grid l-grid--4-columns">
              {filteredPosts.map((item, index) => (
                <StoryCard key={index} storyData={item} />
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
