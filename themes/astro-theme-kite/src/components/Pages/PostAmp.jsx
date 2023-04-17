import Post from '@components/Post/index.jsx';
import Seo from '@components/Seo';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import parseDate from '@helpers/parseDate';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetailsAmp = ({ data }) => {
  const { post: degaPost, space, posts, recentPosts } = data;

  // const post = posts.edges.filter(({ node }) => node.id === degaPost.id)[0];
  // const { previous: previousPost, next: nextPost } = post; TODO: REMOVALS

  const previousPost = null, nextPost = null;

  // for sharing links
  // const title = encodeURIComponent(degaPost.title);
  // let url;
  // if (isBrowser) {
  //   url = encodeURIComponent(window.location.href);
  // }

  return (
    <>
      <Seo
        title={degaPost.title}
        description={degaPost.excerpt}
        image={`${degaPost.medium?.url?.proxy}`}
        canonical={`${space.site_address}/${degaPost.slug}`}
        type="article"
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
        }}
        className="flex flex-row justify-center relative"
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 1024,
            mx: 'auto',
          }}
          className="flex flex-col w-full max-w-[1024px] mx-auto"
        >
          <Post key={`details${degaPost.id}`} post={degaPost} />
          {/* <div>
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                pb: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: '1px',
              }}
              className="flex flex-wrap pb-6 border-b border-gray-200"
            >
              <div
                sx={{
                  flex: [null, null, '0 0 50%'],
                  maxWidth: [null, null, '50%'],
                  p: '1.5rem',
                  textAlign: 'left',
                }}
                className="md:flex-[0_0_50%] md:max-w-[50%] p-6 text-left"
              >
                {previousPost && (
                  <>
                    <a
                      href={`/${previousPost.slug}/`}
                      sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                      className="flex items-center gap-4"
                    >
                      <span>
                        <FaChevronLeft />
                      </span>
                      <div>
                        <span
                          sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
                          className="text-[0.75rem] uppercase"
                        >
                          Previous Post
                        </span>
                        <h3>{previousPost.title}</h3>
                      </div>
                    </a>
                  </>
                )}
              </div>
              <div
                sx={{
                  flex: [null, null, '0 0 50%'],
                  maxWidth: [null, null, '50%'],
                  ml: 'auto',
                  p: '1.5rem',
                  textAlign: 'right',
                }}
                className="md:flex-[0_0_50%] md:max-w-[50%] ml-auto p-6 text-right"
              >
                {nextPost && (
                  <>
                    <a
                      href={`/${nextPost.slug}/`}
                      sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                      className="flex items-center gap-4"
                    >
                      <div>
                        <span
                          sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
                          className="text-[0.75rem] uppercase"
                        >
                          Next Post
                        </span>
                        <h3>{nextPost.title}</h3>
                      </div>
                      <span>
                        <FaChevronRight />
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
            <div
              sx={{
                mt: (theme) => `${theme.space.spacing6}`,
                pb: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: '1px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="mt-6 pb-6 border-b border-gray-200 flex flex-col justify-center"
            >
              <h5
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  alignSelf: 'center',
                  mb: '1.5rem',
                  '&:after': {
                    position: 'absolute',
                    content: '""',
                    width: '50%',
                    height: '1px',
                    borderBottom: '2px solid #3BB2F6',
                    bottom: '-2px',
                    left: '50%',
                    marginLeft: '-25%',
                  },
                }}
                className='text-center relative self-center mb-6 after:absolute after:content-[""] after:w-[50%] after:h-1 after:border-b-2 after:border-[#3BB2F6] after:bottom-[-2px] after:left-[50%] after:-translate-x-1/2'
              >
                Recent Posts
              </h5>
              <div sx={{ display: 'flex', flexWrap: 'wrap' }} className="flex flex-wrap">
                {recentPosts.nodes
                  .filter((post) => post.id !== degaPost.id)
                  .splice(0, 6)
                  .map((post) => (
                    <div
                      key={post.id}
                      sx={{
                        flex: [null, null, '0 0 50%'],
                        maxWidth: [null, null, '50%'],
                        p: '1.5rem',
                        textAlign: 'left',
                      }}
                      className="md:flex-[0_0_50%] md:max-w-[50%] p-6 text-left"
                    >
                      <a href={`/${post.slug}/`} sx={{ display: 'flex' }} className="flex">
                        <div sx={{ flex: '0 0 33%' }} className="flex-[0_0_33%]">
                          <img src={post.medium.url.proxy} alt="" />
                        </div>
                        <div
                          sx={{ flex: '0 0 67%', pl: '1rem' }}
                          className="flex-[0_0_67%] pl-[1rem]"
                        >
                          <h5>{post.title}</h5>
                          <p sx={{ fontSize: '0.75rem' }} className="text-[0.75rem]">
                            {parseDate(post.published_date)}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PostDetailsAmp;
