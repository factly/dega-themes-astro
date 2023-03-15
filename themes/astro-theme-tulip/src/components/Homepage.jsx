// converted
import React from 'react'; // eslint-disable-line no-unused-vars
import parseDate from '@utils/parseDate';
import StoryCard from '@components/StoryCard';

function Homepage({ data }) {
  const { posts, featuredCategories } = data;
  const featuredPost = posts.nodes[0];
  return (
    <>
      <main
        sx={{ p: [null, null, null, '2rem'], pt: '2rem' }}
        className="lg:p-[2rem]"
      >
        {/* Hero Section */}
        <div
          className="hero grid lg:grid-cols-[repeat(12,1fr)] lg:grid-rows-[minmax(2rem,auto)_repeat(2,1fr)] px-[1.5rem] lg:px-0 lg:gap-x-[2rem]"
          sx={{
            display: 'grid',
            columnGap: [null, null, null, '2rem'],
            gridTemplateColumns: [null, null, null, 'repeat(12,1fr)'],
            gridTemplateRows: [
              null,
              null,
              null,
              'minmax(2rem,auto) repeat(2,1fr)',
            ],
            px: ['1.5rem', null, null, 'initial'],
            '& > *': {
              mt: ['2rem', null, null, 'initial'],
            },
          }}
        >
          {/* Left */}
          <div
            className="left lg:col-[1/span_3] lg:row-start-1 lg:order-initial relative order-2 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-auto after:right-[calc((2rem/2)*-1)] after:border-r-[1px] after:border-solid after:border-[#d9d9d9]"
            sx={{
              gridColumn: [null, null, null, '1/span 3'],
              gridRowStart: [null, null, null, 1],
              position: 'relative',
              order: [2, null, null, 'initial'],
              '::after': {
                content: `""`,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 'auto',
                right: 'calc((2rem / 2) * -1)',
                borderRight: '1px solid #d9d9d9',
              },
            }}
          >
            {posts.nodes.slice(1, 3).map((post) => (
              <div
                key={post.id}
                sx={{
                  borderTop: '1px solid #d9d9d9',
                  display: 'block',
                  py: '1rem',
                }}
                className="border-t-[1px] border-solid border-[#d9d9d9] py-[1rem] block"
              >
                <a href={`/${post.slug}`}>
                  <img src={post.medium?.url.proxy} alt="" />
                </a>
                {post.categories.length > 0 && (
                  <a
                    sx={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: '#df1c22',
                      display: 'block',
                    }}
                    className="text-[#df1c22] text-[0.75rem] uppercase block"
                    key={post.id}
                    href={`/category/${post.categories[0].slug}`}
                  >
                    {post.categories[0].name}
                  </a>
                )}
                <a
                  sx={{ display: 'block' }}
                  className="block"
                  key={post.id}
                  href={`/${post.slug}`}
                >
                  <h3 sx={{ fontSize: '1rem' }} className="text-[1rem]">
                    {post.title}
                  </h3>
                </a>

                <a
                  sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
                  className="text-[0.75rem] uppercase"
                  key={post.id}
                  href={`/author/${post?.users[0]?.slug}`}
                >
                  {post?.users[0]?.display_name}
                </a>
                <p sx={{ fontSize: '0.675rem' }} className="text-[0.675rem]">
                  {parseDate(post.published_date)}
                </p>
              </div>
            ))}
          </div>
          {/* Center */}
          <div
            className="center lg:col-[4/span_6] order-1 lg:order-initial mt-0 lg:mt-initial text-center box-border"
            sx={{
              gridColumn: [null, null, null, '4/span 6'],
              textAlign: 'center',
              order: [1, null, null, 'initial'],
              mt: [0, null, null, 'initial'],
            }}
          >
            <div>
              <a href={`/${featuredPost?.slug}`}>
                <div>
                  <img
                    src={featuredPost?.medium?.url?.proxy}
                    alt={featuredPost?.title}
                    sx={{
                      width: '100%',
                      maxHeight: '25rem',
                      objectFit: 'cover',
                    }}
                    className="w-full max-h-[25rem] object-cover"
                  />
                </div>

                <div sx={{ p: '1rem' }} className="p-[1rem]">
                  <p
                    sx={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: '#df1c22',
                    }}
                    className="text-[0.75rem] uppercase text-[#df1c22]"
                  >
                    {featuredPost?.categories[0]?.name}
                  </p>
                  <h2 sx={{ fontSize: '2.25rem' }} className="text-[2.25rem]">
                    {featuredPost?.title}
                  </h2>
                  <p
                    sx={{ fontSize: '1rem', my: '0.5rem' }}
                    className="text-[1rem] my-[0.5rem]"
                  >
                    {featuredPost?.excerpt}
                  </p>
                  <p
                    sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
                    className="text-[0.75rem] uppercase"
                  >
                    {featuredPost?.users[0].display_name}
                  </p>
                  <p sx={{ fontSize: '0.675rem' }} className="text-[0.675rem]">
                    {parseDate(featuredPost?.published_date)}
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* Right */}
          <div
            className="right lg:col-[10/span_3] lg:order-initial order-2 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-auto before:left-[calc((2rem/2)*-1)] before:border-r-[1px] before:border-solid before:border-[#d9d9d9]"
            sx={{
              gridColumn: [null, null, null, '10/span 3'],
              position: 'relative',
              order: [2, null, null, 'initial'],
              '::before': {
                content: `""`,
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 'auto',
                left: 'calc((2rem / 2) * -1)',
                borderRight: '1px solid #d9d9d9',
              },
            }}
          >
            <h4
              sx={{ mb: '0.5rem', fontSize: '1rem' }}
              className="mb-[0.5rem] text-[1rem]"
            >
              Latest Posts
            </h4>
            <div>
              {posts.nodes.slice(3, 8).map((post) => (
                <div
                  key={post.id}
                  className="border-t-[1px] border-solid border-[#d9d9d9] py-[1rem] flex gap-[0.75rem] items-center justify-between"
                  sx={{
                    borderTop: '1px solid #d9d9d9',
                    py: '1rem',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {post.categories.length > 0 && (
                      <a
                        sx={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          color: '#df1c22',
                          display: 'block',
                        }}
                        className="text-[#df1c22] text-[0.75rem] uppercase block"
                        key={post.id}
                        href={`/category/${post.categories[0].slug}`}
                      >
                        {post.categories[0].name}
                      </a>
                    )}
                    <a
                      sx={{ display: 'block' }}
                      className="block"
                      key={post.id}
                      href={`/${post.slug}`}
                    >
                      <h3 sx={{ fontSize: '1rem' }} className="text-[1rem]">
                        {post.title}
                      </h3>
                    </a>
                    <div
                      sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
                      className="flex gap-[0.5rem] flex-wrap"
                    >
                      <a
                        key={post.id}
                        href={`/author/${post?.users[0]?.slug}`}
                        sx={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                        }}
                        className="text-[0.75rem] uppercase"
                      >
                        {post?.users[0]?.display_name}
                      </a>
                      <p sx={{ fontSize: '0.675rem' }} className='text-[0.675rem]'>
                        {parseDate(post.published_date)}
                      </p>
                    </div>
                  </div>
                  <div
                    sx={{
                      maxWidth: '7.5rem',
                      flex: '1 0 25%',
                    }}
                    className="max-w-[25%] max-w-[7.5rem] grow-1 shrink-0 basis-25%"
                  >
                    <img src={post.medium?.url?.proxy} alt={post.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Featured categories Section  */}
        <div>
          {data?.featuredCategories?.nodes.length > 0 &&
            data.featuredCategories.nodes.map((category) => {
              return (
                category.posts.nodes.length > 0 && (
                  <section key={category.id} sx={{ my: '1.5rem' }} className='my-[1.5rem]'>
                    <h4 sx={{ borderBottom: '1px solid black', pb: '0.75rem' }} className='border-b-[1px] border-black pb-[0.75rem] block'>
                      {category.name}
                    </h4>
                    <div
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: [
                          '1fr',
                          null,
                          'repeat( 2, 1fr )',
                          'repeat( 3, 1fr)',
                        ],
                        px: [null, null, (theme) => `${theme.space.spacing6}`],
                        mt: (theme) => `${theme.space.spacing7}`,
                        gridGap: (theme) => `${theme.space.spacing7}`,
                      }}
                      className="grid grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] md:px-5 mt-6 gap-6"
                    >
                      {category.posts?.nodes.slice(0, 6).map((post) => (
                        <StoryCard
                          cardStyle="tulip"
                          key={post.id}
                          storyData={post}
                        />
                      ))}
                    </div>
                  </section>
                )
              );
            })}
        </div>
      </main>
    </>
  );
}
export default Homepage;
