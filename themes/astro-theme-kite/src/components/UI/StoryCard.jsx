import React from 'react';
import parseDate from '@helpers/parseDate';
import generateFluidObject from '@helpers/generateFluidObject';

const StoryCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {(type === 'featured' || type === 'basic') && (
        <article className="card post-card post tag-welcome tag-hash-announcement js-post-card">
          <a
            className="post-card__media"
            href={`/${post.slug}/`}
            title={post.title}
            aria-label={post.title}
          >
            <img
              className="post-card__img lazyautosizes ls-is-cached lazyloaded"
              data-src={post.medium.url.proxy}
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
            />
          </a>

          <div className="post-card__content">
            <div className="tag-list flex flex-wrap m-b-sm">
              <a
                className="tag-list__item m-r-sm has-accent flex flex-cc"
                href={`/category/${post.categories[0]?.slug}/`}
                aria-label={post.categories[0]?.name}
              >
                <span
                  className="tag-list__item--accent"
                  style={{ backgroundColor: '#D91C38' }}
                ></span>
                {post.categories[0]?.name}
              </a>
            </div>

            <h2 className="post-card__title">
              <a href={`/${post.slug}/`} aria-label={post.title}>
                {post.title}
              </a>
            </h2>

            <div className="post-card__details flex items-center m-b">
              {/* <span className="visibility m-r">public</span> */}
              {/* <span className="m-r fw-400">–</span> */}
              {/* <span className="read-time">1 min read</span> */}
              {/* <span className="m-l m-r fw-400">–</span> */}
              {/* <i className="icon icon-message-circle icon--xs">
                    <svg className="icon__svg">
                      <use xlinkHref="/assets/icons/feather-sprite.svg?v=d13910294f#message-circle"></use>
                    </svg>
                  </i>{' '}
                  <span className="m-l-xs">4</span> */}
            </div>

            <div className="post-card__exc m-b">{post.excerpt}</div>

            <div className="flex-1"></div>

            <div className="post-card__ftr">
              <time dateTime={parseDate(post.published_at)} className="post-card__date flex-1">
                {parseDate(post.published_at)}
              </time>

              <div className="author-mini flex items-center">
                {post.users.length > 0 && (
                  <a
                    href={`/author/${post.users[0].slug}/`}
                    className="author-mini__item has-img  nr-1"
                    title={post.users[0].display_name}
                    aria-label={post.users[0].display_name}
                  >
                    <span className="author-mini__tooltip">{post.users[0].display_name}</span>
                    <img
                      className="author-mini__img lazyautosizes ls-is-cached lazyloaded"
                      //  data-sizes="auto"
                      //  data-src="/content/images/size/w100/2020/12/user-1.png"
                      src={post.users[0]?.medium?.url.proxy}
                      alt={post.users[0].display_name}
                      sizes="420px"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      )}

      {type === 'sidebar' && (
        <div sx={{ display: 'flex', gap: '1.5rem', py: '0.75rem', px: '1.5rem' }} className='flex gap-6 py-3 px-6'>
          <div style={{ flex: '0 0 240px' }}>
            <div
              sx={{
                paddingBottom: '56.24999999%',
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
              }}
              className='pb-[56.2499999%] overflow-hidden relative w-full'
            >
              <div sx={{ position: 'absolute', width: '100%', height: ' 100%' }}
                className='absolute w-full h-full'
              >
                <a
                  href={post.slug}
                  sx={{
                    zIndex: 20,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    textDecoration: 'none',
                    touchAction: 'manipulation',
                  }}
                  className='z-20 block w-full h-full absolute no-underline touch-manipulation'
                >
                  {post.medium && (
                    <img
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                        borderRadius: '16px',
                      }}
                      className='h-full object-cover w-full rounded-2xl'
                      src={post.medium.url.proxy}
                      fluid={generateFluidObject({
                        url: post.medium?.url.proxy,
                        dimensions: post.medium?.dimensions,
                      })}
                    />
                  )}
                </a>
              </div>
            </div>
          </div>
          <div sx={{ flex: '1 1 auto' }} className='flex-[1_1_auto]'>
            <div
              sx={{
                display: 'inline-flex',
                padding: '0 20px',
                height: '32px',
                lineHeight: '32px',
                fontSize: '.875rem',
                fontWeight: 500,
                position: 'relative',
                borderRadius: '16px',
                background: 'gray',
                textAlign: 'center',
                marginBottom: '16px',
                color: 'white',
                '&:hover': {
                  color: '#000',
                  bg: '#feb2b2',
                },
              }}
              className='inline-flex p-[0_20px] h-8 leading-8 text-sm font-medium relative rounded-[16px] bg-[gray] text-center mb-4 text-white hover:text-black hover:bg-[#feb2b2]'
            >
              <a href={`/category/${post.categories[0].slug}`}>{post.categories[0].name}</a>
            </div>
            <div>
              <a href={post.slug}>
                <h2 title={post.title} sx={{ fontSize: '1.5rem' }} className='text-[1.5rem]'>
                  {post.title}
                </h2>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoryCard;

//post.categories[0].name
