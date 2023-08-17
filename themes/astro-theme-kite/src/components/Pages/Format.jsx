import StoryCard from '@components/UI/StoryCard';

const FormatDetails = ({ data }) => {
  const { posts } = data;
  //const filteredPosts = allDegaPost.nodes.filter((post) => post.published_date !== null);
  return (
    <>
      <div sx={{ mx: 'auto', maxWidth: 1560 }} className='mx-auto max-w-[1560px]'>
        <h1
          sx={{
            mt: (theme) => `${theme.space.layout4}`,
            mb: (theme) => `${theme.space.layout2}`,
            textAlign: 'center',
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
          }}
          className='mt-[3rem] mb-[1.5rem] text-center text-[1.5rem] sm:text-[2rem]'
        >
          {/* {posts.nodes[0]?.format.name} */}
        </h1>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
            pt: [null, null, null, (theme) => `${theme.space.spacing7}`],
          }}
          className='flex flex-col pb-6 lg:pt-[3rem]'
        >
          {posts?.nodes?.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(3,1fr)'],
                gridGap: (theme) => `${theme.space.spacing6}`,
                px: [null, null, (theme) => `${theme.space.spacing6}`],
              }}
              className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:px-6'
            >
              {posts?.nodes?.map((item, index) => (
                <StoryCard key={index} post={item} />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }} className='text-center'>No posts found</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default FormatDetails;
