// converted
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import PostInfo from './PostInfo';
import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';
import Excerpt from './Excerpt';
import parseTiptapContent from '@utils/parseTipTapEditorData';
/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post, observer }) => {
  const postSection = useRef(null);
  const headerSocialIcon = createRef();
  const filteredClaims = post.claims?.filter((claim) => claim.review_sources);

  useEffect(() => {
    {
      !post.is_page && observer.observe(postSection.current);
    }
    {
      !post.is_page && observer.observe(headerSocialIcon.current);
    }
  }, [observer, postSection, headerSocialIcon]);

  return (
    <>
      <article
        post={post.id}
        ref={postSection}
        slug={post.slug}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: (theme) => `${theme.space.spacing6}`,
          my: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.body}`,
          '&:first-of-type': {
            mt: 0,
          },
        }}
        className='flex flex-col px-5 my-5 text-body first-of-type:mt-0'
      >
        <div
          sx={{
            bg: (theme) => `${theme.colors.bgLight}`,
            borderTopLeftRadius: 'default',
            borderTopRightRadius: 'default',
            borderBottomLeftRadius: 'none',
            borderBottomRightRadius: 'none',
            overflow: 'hidden',
          }}
          className='bg-bgLight rounded-t-default rounded-r-none rounded-l-none overflow-hidden'
        >
          <h1
            sx={{
              fontWeight: 'bold',
              fontSize: (theme) => [`${theme.fontSizes.h4}`, null, `${theme.fontSizes.h3}`],
              py: (theme) => `${theme.space.spacing3}`,
            }}
            className='font-bold text-h4 md:text-h3 py-2'
          >
            {post.title}
          </h1>
          {!post.is_page && (
            <div
              sx={{
                display: 'flex',
                flexDirection: ['column', null, 'row'],
                justifyContent: 'space-between',
              }}
              className='flex flex-col md:flex-row justify-between'
            >
              <PostInfo
                date={post.published_date}
                users={post.users}
                categories={post.categories}
              />
              <ShareButtonGroup
                setRef={headerSocialIcon}
                data={{
                  url: encodeURIComponent(""),
                  title: encodeURIComponent(post.title),
                }}
              />
            </div>
          )}
        </div>
        {!post.is_page && <Excerpt excerpt={post.excerpt} image={post.medium} />}

        <div
          sx={{
            width: ['full'],
            mx: 'auto',
            fontSize: (theme) => `${theme.fontSizes.body}`,
          }}
          className='w-full mx-auto text-body'
        >
          {post.claims && <FactCheckWidget claims={post.claims} />}
          <div className="parsed">
            <div dangerouslySetInnerHTML={{__html: post.description_html}}></div>
          </div>
          {post.claims &&
            post.claims.map((claim, i) => (
              <React.Fragment key={i}>
                {post.claims.length > 1 && (
                  <div
                    sx={{
                      bg: (theme) => `${theme.colors.bgPrimary}`,
                      p: (theme) => `${theme.space.spacing5}`,
                      mt: (theme) => `${theme.space.spacing5}`,
                    }}
                    className='bg-bgPrimary p-4 mt-4'
                  >
                    <div
                      sx={{
                        mb: (theme) => `${theme.space.spacing5}`,
                      }}
                      className='mb-4'
                    >
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                        className='font-bold'
                      >
                        Claim:{' '}
                      </h4>
                      {claim.claim}
                    </div>
                    <div>
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                        className='font-bold'
                      >
                        Fact:
                      </h4>
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                )}

                <div className="parsed">
                  {parseTiptapContent(claim.description_html)}
                </div>
              </React.Fragment>
            ))}
          {/* Review Sources */}
          {filteredClaims?.length > 0 && (
            <div sx={{ mt: '1rem' }} className='mt-4'>
              <h4 sx={{ mb: '0.75rem', fontSize: '1.125rem' }}
              className='mb-[0.75rem] text-[1.125rem]'
              >Sources:</h4>
              {filteredClaims.map((claim, i) => (
                <React.Fragment key={i}>
                  {filteredClaims.length > 1 && (
                    <p sx={{ mb: '0.25rem', fontSize: '1rem' }} className='mb-1 text-[1rem]'>
                      <strong>Claim:</strong> {claim.claim}
                    </p>
                  )}
                  {claim.review_sources.map((review, i) => (
                    <a
                      href={review.url}
                      key={i}
                      sx={{
                        fontSize: '0.875rem',
                        '&:hover': {
                          textDecoration: 'underline',
                          color: 'textLinkHoverPrimary',
                        },
                      }}
                      className='text-[0.875rem] hover:underline hover:text-textLinkHoverPrimary'
                    >{`${review.description}, ${review.url}`}</a>
                  ))}
                </React.Fragment>
              ))}
            </div>
          )}

          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: (theme) => `${theme.space.spacing6}`,
              pb: (theme) => `${theme.space.spacing6}`,
              borderBottomWidth: '1px',
            }}
            className='flex flex-wrap mt-6 pb-6 border-b-[1px]'
          >
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& a:first-of-type': {
                  ml: 0,
                },
              }}
              className='flex flex-wrap first-of-type:ml-0'
            >
              {post.tags.map((tag, i) => (
                <Tag key={i} url={tag.slug} name={tag.name} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
