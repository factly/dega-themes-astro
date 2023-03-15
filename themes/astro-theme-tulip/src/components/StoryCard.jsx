// converted 
import React from 'react'; // eslint-disable-line no-unused-vars
import _ from 'lodash';
import parseDate from '@utils/parseDate';

/**
 * TODO: Change the data structure of props
 * TODO: Make images more responsive
 * TODO: Make most of the items optional
 * TODO: Possibly increase padding
 * TODO: Probably change the name of the component to "Card"
 * TODO: Refactor to decrease repetition of code
 */

const StoryCard = ({
  storyData,
  cardStyle = 'basic',
  excerpt = false,
  type = 'article',
  imageSize = { width: 'full', height: 40 },
}) => (
  <>
    {cardStyle === 'tulip' && (
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // pt: (theme) => `${theme.space.spacing6}`,
          borderRadius: (theme) => `${theme.borderRadius.default}`,
          // boxShadow: (theme) => `${theme.boxShadow.default}`,
          backgroundColor: (theme) => `${theme.colors.background.default}`,
          color: (theme) => `${theme.colors.text.default}`,
          '& a:hover': {
            backgroundColor: (theme) => `${theme.colors.background.hover}`,
            color: (theme) => `${theme.colors.text.hover}`,
            textDecoration: 'underline',
          },
        }}
        className="story-card flex flex-col rounded-default bg-default text-default"
      >
        <div
          sx={{
            display: 'flex',
          }}
          className="flex"
        >
          <div
            className="tulip flex flex-col w-full max-w-full"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: 'full',
              maxWidth: 'full',
            }}
          >
            <a href={`/${storyData.slug}`}>
              <div
                sx={{
                  maxWidth: '100%',
                  width: '100%',
                  display: 'flex',
                  overflow: 'hidden',
                }}
                className="max-w-full w-full flex overflow-hidden"
              >
                <div
                  sx={{
                    paddingBottom: '56.24999999%',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                  }}
                  className="pb-[56.24999999%] overflow-hidden relative w-full"
                >
                  <div
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: ' 100%',
                      background: '#eff8fa',
                    }}
                    className="absolute w-full h-full bg-[#eff8fa]"
                  >
                    <img
                      sx={{ height: '100%', objectFit: 'cover', width: '100%' }}
                      src={storyData.medium?.url.proxy}
                      className="h-full object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </a>
            <div
              key={storyData.id}
              sx={{
                borderTop: '1px solid #d9d9d9',
                display: 'block',
                py: '1rem',
                px: ['1rem', 0],
              }}
              className="border-t-[1px] border-[#d9d9d9] block py-[1rem] px-[1rem] sm:px-0"
            >
              {storyData?.categories?.length > 0 && (
                <a
                  key={storyData.id}
                  href={`/category/${storyData.categories[0].slug}`}
                  sx={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: '#df1c22',
                    display: 'block',
                  }}
                  className="text-[#df1c22] text-[0.75rem] uppercase block"
                >
                  {storyData.categories[0].name}
                </a>
              )}
              <a
                sx={{ display: 'block' }}
                className="block"
                key={storyData.id}
                href={`/${storyData.slug}`}
              >
                <h3 sx={{ fontSize: '1rem' }} className="text-[1rem]">
                  {storyData.title}
                </h3>
              </a>
              <a
                sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
                key={storyData.id}
                href={`/author/${storyData?.users[0]?.slug}`}
                className="text-[0.75rem] uppercase"
              >
                {storyData?.users[0]?.display_name}
              </a>
              <p sx={{ fontSize: '0.675rem' }} className="text-[0.675rem]">
                {parseDate(storyData.published_date)}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
    {cardStyle === 'basic' && (
      <article
        className={`${cardStyle} flex flex-col leading-tight border-b-1 p-5 border-borderPrimary last:border-b-0`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 'tight',
          borderBottomWidth: '1px',
          '&:last-child': { borderBottomWidth: 0 },
          p: (theme) => `${theme.space.spacing6}`,
          borderColor: (theme) => `${theme.colors.borderPrimary}`,
        }}
      >
        <a
          href={`/${storyData.slug}`}
          className="vertical horizontal w-full flex no-underline hover:no-underline"
          sx={{
            width: 'full',
            display: 'flex',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              pr: (theme) => `${theme.space.spacing5}`,
              py: (theme) => `${theme.space.spacing3}`,
              ...imageSize,
            }}
            className="flex justify-start items-start pr-4 py-2 w-full h-[40px]"
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                className="h-full w-full object-cover rounded-default"
                // onError={addDefaultSrc}
              />
            )}
          </div>
          <div
            className="w-full flex flex-col"
            sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}
          >
            <p
              sx={{
                color: (theme) => `${theme.colors.textLinkPrimary}`,
                fontSize: (theme) => `${theme.fontSizes.h8}`,
                px: (theme) => `${theme.space.spacing2}`,
              }}
              className="text-textLinkPrimary text-h8 px-1"
            >
              {storyData.categories.map((category, i, arr) => (
                <span key={i}>
                  {category.name}
                  {arr.length - i > 1 && ', '}
                </span>
              ))}
            </p>
            <div
              id="nav-0"
              //className="active"
              sx={{
                width: 'full',
                fontWeight: 'bold',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                color: (theme) => `${theme.colors.textPrimary}`,
              }}
            >
              {storyData.title}
            </div>
            {excerpt && (
              <p
                sx={{
                  color: (theme) => `${theme.colors.textPrimary}`,
                  fontSize: (theme) => `${theme.fontSizes.h7}`,
                  pt: (theme) => `${theme.space.spacing3}`,
                }}
                className="text-textPrimary text-h7 pt-2"
              >
                {storyData.excerpt}
              </p>
            )}
            <div
              sx={{
                display: 'flex',
                mt: 'auto',
                pt: (theme) => `${theme.space.spacing3}`,
              }}
              className="flex mt-auto pt-2"
            >
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 'full',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
                className="vertical horizontal flex flex-col w-full justify-between items-start"
              >
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                  className="flex flex-row flex-wrap"
                >
                  <p
                    sx={{
                      color: (theme) => `${theme.colors.textSecondary}`,
                      fontSize: [
                        (theme) => `${theme.fontSizes.h8}`,
                        null,
                        (theme) => `${theme.fontSizes.h7}`,
                      ],
                      mr: (theme) => `${theme.space.spacing3}`,
                      textTransform: 'none',
                    }}
                    className="text-textSecondary text-h8 md:text-h7 mr-2"
                  >
                    {storyData.users.map((user, i, arr) => (
                      <span key={i}>
                        {`${user.first_name} ${user.last_name}`}{' '}
                        {arr.length - i > 1 && ','}
                      </span>
                    ))}
                  </p>
                </div>
                <p
                  sx={{
                    color: (theme) => `${theme.colors.textSecondary}`,
                    fontSize: [
                      (theme) => `${theme.fontSizes.h8}`,
                      null,
                      (theme) => `${theme.fontSizes.h7}`,
                    ],
                  }}
                  className="text-textSecondary text-h8 md:text-h7"
                >
                  {parseDate(storyData.published_date)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </article>
    )}

    {cardStyle === 'featured' && (
      <article
        sx={{
          bg: 'white',
          borderTopLeftRadius: 'default',
          borderTopRightRadius: 'default',
          borderBottomLeftRadius: 'none',
          borderBottomRightRadius: 'none',
          overflow: 'hidden',
          px: (theme) => `${theme.space.spacing6}`,
        }}
        className='bg-white rounded-tl-default rounded-tr-default rounded-bl-none rounded-br-none overflow-hidden px-5'
      >
        <a
          href={`/${storyData.slug}`}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              // pr: (theme) => `${theme.space.spacing5}`,
              py: (theme) => `${theme.space.spacing3}`,
              ...imageSize,
            }}
            className="flex justify-start items-start py-2 w-full h-[40px]"
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                className="h-full w-full object-cover rounded-default"
                // onError={addDefaultSrc}
              />
            )}
          </div>

          <p
            sx={{
              width: 'full',
              color: (theme) => `${theme.colors.textSecondary}`,
              fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
              pt: (theme) => `${theme.space.spacing3}`,
            }}
            className="text-textSecondary text-[0px] md:text-h8 pt-2"
          >
            {storyData.subtitle}
          </p>
          <h2
            sx={{
              width: 'full',
              fontWeight: 'bold',
              fontSize: (theme) => `${theme.fontSizes.h6}`,
              lineHeight: 'tight',
              color: (theme) => `${theme.colors.textPrimary}`,
              overflowWrap: 'break-word',
            }}
            className="w-full font-bold text-textPrimary text-h6 leading-tight break-words"
          >
            {storyData.title}
          </h2>
          <p
            sx={{
              fontSize: (theme) => `${theme.fontSizes.bodyArticle}`,
              pt: (theme) => `${theme.space.spacing3}`,
              overflowWrap: 'break-word',
              color: (theme) => `${theme.colors.textPrimary}`,
            }}
            className='text-bodyArticle pt-2 break-words text-textPrimary'
          >
            {storyData.excerpt}
          </p>
        </a>
        <div
          sx={{
            flex: 'none',
            mt: 'auto',
            py: (theme) => `${theme.space.spacing5}`,
          }}
          className="flex-none mt-auto py-4"
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            className="flex items-center justify-between"
          >
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex justify-center items-center"
            >
              <p
                sx={{
                  color: (theme) => `${theme.colors.gray[6]}`,
                  fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                  mr: (theme) => `${theme.space.spacing3}`,
                  textTransform: 'none',
                }}
                className='text-gray-600 text-[0px] md:text-h8 mr-2'
              >
                {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
              </p>
            </div>
            <p
              sx={{
                color: (theme) => `${theme.colors.textSecondary}`,
                fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
              }}
              className="text-textSecondary text-[0px] md:text-h8"
            >
              {parseDate(storyData.published_date)}
            </p>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'vertical' && (
      <article
        className={` ${cardStyle} flex flex-col
        leading-tight border-b-1 last:border-b-0 p-5 border-borderPrimary`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 'tight',
          borderBottomWidth: '1px',
          '&:last-child': { borderBottomWidth: 0 },
          p: (theme) => `${theme.space.spacing6}`,
          borderColor: (theme) => `${theme.colors.borderPrimary}`,
        }}
      >
        <a
          href={`/${storyData.slug}`}
          sx={{
            width: 'full',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
          className="w-full flex flex-col no-underline hover:no-underline"
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              pr: (theme) => `${theme.space.spacing5}`,
              py: (theme) => `${theme.space.spacing3}`,
              ...imageSize,
            }}
            className="flex justify-start items-start py-2 pr-4 w-full h-[40px]"
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                className="h-full w-full object-cover rounded-default"
                // onError={addDefaultSrc}
              />
            )}
          </div>
          <div sx={{ width: 'full', display: 'flex', flexDirection: 'column' }} className='w-full flex flex-col'>
            <div
              id="nav-0"
              //  className="active"
              sx={{
                width: 'full',
                fontWeight: 'bold',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                color: (theme) => `${theme.colors.textPrimary}`,
              }}
              className="w-full font-bold text-textPrimary text-h6"
            >
              {storyData.title}
            </div>
            <p
              sx={{
                color: (theme) => `${theme.colors.textPrimary}`,
                fontSize: (theme) => `${theme.fontSizes.h7}`,
                pt: (theme) => `${theme.space.spacing3}`,
              }}
              className="text-textPrimary text-h7 pt-2"
            >
              {storyData.excerpt}
            </p>

            <div
              sx={{
                display: 'flex',
                mt: 'auto',
                pt: (theme) => `${theme.space.spacing3}`,
              }}
              className="flex mt-auto pt-2"
            >
              <div
                className="vertical horizontal flex flex-col w-full justify-between items-start"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 'full',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                  className="flex flex-row flex-wrap"
                >
                  <p
                    sx={{
                      color: (theme) => `${theme.colors.textSecondary}`,
                      fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                      mr: (theme) => `${theme.space.spacing3}`,
                      textTransform: 'none',
                    }}
                    className='text-textSecondary text-[0px] md:text-h8 mr-2'
                  >
                    {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
                  </p>
                </div>
                <p
                  sx={{
                    color: (theme) => `${theme.colors.textSecondary}`,
                    fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                  }}
                  className="text-textSecondary text-[0px] md:text-h8"
                >
                  {parseDate(storyData.published_date)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </article>
    )}
    {cardStyle === 'withoutimage' && <article>card without image</article>}
    {cardStyle === 'card' && (
      <a
        href={`/${storyData.slug}`}
        sx={{
          width: 'full',
          textDecoration: 'none',
          transition: 'all 0.5s',
          '&:hover': { textDecoration: 'none', transform: 'scale(1.04)' },
        }}
        className="w-full no-underline hover:no-underline transition-all duration-500 transform hover:scale-[1.04]"
      >
        <article
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            borderWidth: '1px',
            m: (theme) => `${theme.space.spacing2} ${theme.space.spacing5}`,
            borderRadius: 'lg',
          }}
          className="flex flex-col sm:flex-row border border-borderPrimary my-4 mx-1 rounded-lg"
        >
          <div
            style={{ minWidth: '15rem', maxWidth: '15rem', maxHeight: '15rem' }}
            sx={{ borderRadius: 'lg' }}
            className="rounded-lg"
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                className="h-full w-full object-cover rounded-default"
                //onError={addDefaultSrc}
              />
            )}
          </div>
          <div
            sx={{
              p: (theme) => `${theme.space.spacing6}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="p-5 flex flex-col justify-between"
          >
            <h2 sx={{ pb: (theme) => `${theme.space.spacing3}` }} className='pb-2'>
              {storyData.title}
            </h2>
            <p sx={{ fontSize: (theme) => `${theme.fontSizes.h8}` }} className='text-h8'>
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
              })}
            </p>
            <p
              sx={{
                fontSize: (theme) => `${theme.fontSizes.h8}`,
                pt: (theme) => `${theme.space.spacing3}`,
                color: (theme) => `${theme.colors.gray[5]}`,
              }}
              className="text-h8 pt-2 text-gray-500"
            >
              <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
              {' / '}
              <span>{parseDate(storyData.published_date)}</span>
            </p>
          </div>
        </article>
      </a>
    )}
    {cardStyle === 'iframely' && (
      <div
        sx={{
          display: 'flex',
          border: '1px solid rgb(222,222,222)',
        }}
        className="flex border border-[rgb(222,222,222)]"
      >
        <div
          className="iframely-card flex flex-col w-full max-w-full"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 'full',
            maxWidth: 'full',
          }}
        >
          <div
            sx={{
              maxWidth: '100%',
              width: '100%',
              display: 'flex',
              overflow: 'hidden',
            }}
            className="max-w-full w-full flex overflow-hidden"
          >
            <div
              sx={{
                paddingBottom: '56.24999999%',
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
              }}
              className="pb-[56.24999999%] overflow-hidden relative w-full"
            >
              <div
                sx={{ position: 'absolute', width: '100%', height: ' 100%' }}
                className="absolute w-full h-full"
              >
                <a
                  href={`/${storyData.slug}`}
                  sx={{
                    zIndex: 20,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    textDecoration: 'none',
                    touchAction: 'manipulation',
                  }}
                  className="z-20 block w-full h-full absolute no-underline touch-manipulation"
                >
                  <img
                    sx={{ height: '100%', objectFit: 'cover', width: 'full' }}
                    className="h-full object-cover w-full"
                    src={storyData.medium?.url.proxy}
                  />
                </a>
              </div>
            </div>
          </div>
          <a
            href={`/${storyData.slug}`}
            sx={{
              p: (theme) => `${theme.space.spacing4}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: '1 0 auto',
            }}
            className="p-3 flex flex-col justify-between grow-1 shrink-0 basis-auto"
          >
            <h3 sx={{ fontSize: (theme) => `${theme.fontSizes.h6}` }}
            className='text-h6'
            >
              {storyData.title}
            </h3>
            {excerpt && (
              <p sx={{ fontSize: (theme) => `${theme.fontSizes.bodySmall}` }} className='text-bodySmall'>
                {_.truncate(storyData.excerpt, {
                  length: 150,
                  separator: /,?\.* +/,
                  omission: '...',
                })}
              </p>
            )}
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                span: {
                  mr: (theme) => `${theme.space.spacing2}`,
                  fontSize: (theme) => `${theme.fontSizes.bodyExtraSmall}`,
                  color: '#919191',
                },
              }}
              className="flex items-center"
            >
              {storyData.format && (
                <>
                  <span className='mr-1 text-bodyExtraSmall text-[#919191]'>{storyData.format.name}</span>
                  <span className='mr-1 text-bodyExtraSmall text-[#919191]'>/</span>
                </>
              )}
              {storyData.users[0]?.first_name && (
                <>
                  <span className='mr-1 text-bodyExtraSmall text-[#919191]'>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
                  <span className='mr-1 text-bodyExtraSmall text-[#919191]'>/</span>
                </>
              )}
              <span className='mr-1 text-bodyExtraSmall text-[#919191]'>{parseDate(storyData.published_date)}</span>
            </div>
          </a>
        </div>
      </div>
    )}
    {cardStyle === 'iframely-small' && (
      <div
        sx={{
          display: 'flex',
          my: (theme) => `${theme.space.spacing5}`,
          border: '1px solid rgb(222,222,222)',
        }}
        className="flex my-4 border border-[rgb(222,222,222)]"
      >
        <div
          className="iframely-small flex items-center w-full max-w-full"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'full',
            maxWidth: 'full',
          }}
        >
          <div sx={{ width: '150px', maxWidth: '150px', height: '150px' }} className='w-[150px] h-[150px] max-w-[150px]'>
            <a
              href={`/${storyData.slug}`}
              sx={{
                display: 'block',
                width: '150px',
                height: '150px',
                background: 'no-repeat center',
                backgroundSize: ' cover',
                backgroundImage: `url(${storyData.medium?.url.proxy.replace(
                  '/dega.factly.in/',
                  '/'
                )})`,
                textDecoration: 'none',
                touchAction: 'manipulation',
              }}
              className={`block w-[150px] h-[150px] bg-no-repeat bg-center bg-cover touch-manipulation no-underline bg-[url(${storyData.medium?.url.proxy.replace(
                '/dega.factly.in/',
                '/'
              )})`}
            ></a>
          </div>
          <a
            href={`/${storyData.slug}`}
            sx={{
              p: (theme) => `${theme.space.spacing4}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="p-3 flex flex-col justify-between"
          >
            <h3>{storyData.title}</h3>
            <p sx={{ fontSize: (theme) => `${theme.fontSizes.bodySmall}` }} className='text-bodySmall'>
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
                omission: '...',
              })}
            </p>
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                span: {
                  mr: (theme) => `${theme.space.spacing3}`,
                  fontSize: (theme) => `${theme.fontSizes.h8}`,
                  color: '#919191',
                },
              }}
              className="flex items-center"
            >
              {storyData.format && (
                <>
                  <span className='mr-2 text-h8 text-[#919191]'>{storyData.format.name}</span>
                  <span className='mr-2 text-h8 text-[#919191]'>/</span>
                </>
              )}
              {storyData.users[0]?.first_name && (
                <>
                  {' '}
                  <span className='mr-2 text-h8 text-[#919191]'>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
                  <span className='mr-2 text-h8 text-[#919191]'>/</span>
                </>
              )}
              <span className='mr-2 text-h8 text-[#919191]'>{parseDate(storyData.published_date)}</span>
            </div>
          </a>
        </div>
      </div>
    )}
  </>
);

export default StoryCard;
