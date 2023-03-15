// converted
import React from 'react';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import Post from '@components/Post/index.jsx';
import StoryCard from '@components/StoryCard';

export default function PostDetails({ post, posts }) {
  const filteredPosts = posts.nodes.filter((p) => p.id !== post.id).slice(0, 6);

  const [showSocialIcon, setShowSocialIcon] = React.useState(false);
  const [postActiveIndex, setPostActiveIndex] = React.useState(
    parseInt(post.id)
  );
  const [observer, setObserver] = React.useState({
    observe: () => {},
  });

  const handleShowSocialIcon = (entry) => {
    if (entry.intersectionRatio > 0) {
      setShowSocialIcon(false);
    } else {
      setShowSocialIcon(true);
    }
  };

  const handleSetActiveLink = (entry) => {
    const id = entry.target.getAttribute('slug');
    if (entry.intersectionRatio > 0) {
      setPostActiveIndex(id);
    }
  };

  const createObserver = () => {
    const o = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.hasAttribute('social-icon')) {
          handleShowSocialIcon(entry);
        }
        if (entry.target.hasAttribute('post')) {
          handleSetActiveLink(entry);
        }
      });
    });
    setObserver(o);
  };
  React.useEffect(() => {
    createObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // for sharing links
  const title = encodeURIComponent(post.title);
  let url;
    url = encodeURIComponent("");
  return (
    <>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
        }}
        className='flex flex-row justify-center relative'
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 1024,
            mx: 'auto',
            p: [
              (theme) => `${theme.space.spacing3}`,
              null,
              null,
              (theme) => `${theme.space.spacing8}`,
            ],
            pl: (theme) => [null, null, `${theme.space.spacing8}`],
          }}
          className='flex flex-col w-full max-w-[1024px] mx-auto p-2 lg:p-7 pl-7'
        >
          <Post post={post} observer={observer} />

          {showSocialIcon && !post.is_page && (
            <>
              <div
                className="hidden md:flex md:flex-col fixed -ml-7 md:items-center flex-start md:justify-end top-[40vh]"
                style={{
                  top: '40vh',
                }}
                sx={{
                  display: ['none', null, 'flex'],
                  flexDirection: 'column',
                  position: 'fixed',
                  ml: (theme) => `-${theme.space.spacing8}`,
                  // left: 0,
                  alignItems: 'center',
                  justifyContent: ['flex-start', null, 'flex-end'],
                  top: '40vh',
                }}
              >
                <a
                  title="Share on Facebook"
                  href={`https://www.facebook.com/sharer.php?u=${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    mx: (theme) => `${theme.space.spacing3}`,
                    '&:first-of-type': { mx: 0 },
                    my: (theme) => `${theme.space.spacing2}`,
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                  }}
                  className='block mx-2 first-of-type:mx-0 my-1 font-semibold rounded-default'
                >
                  <FaFacebookSquare
                    sx={{ fontSize: (theme) => `${theme.fontSizes.h4}` }}
                    className='text-h4'
                    color="#3b5998"
                  />
                </a>
                <a
                  title="Tweet it"
                  href={`https://twitter.com/share?text=${title}-&url=${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    mx: (theme) => `${theme.space.spacing3}`,
                    '&:first-of-type': { mx: 0 },
                    my: (theme) => `${theme.space.spacing2}`,
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                  }}
                  className='block mx-2 first-of-type:mx-0 my-1 font-semibold rounded-default'
                >
                  <FaTwitterSquare
                    sx={{ fontSize: (theme) => `${theme.fontSizes.h4}` }}
                    className='text-h4'
                    color="#1da1f2"
                  />
                </a>
                <a
                  title="Share on WhatsApp"
                  href={`https://api.whatsapp.com/send?text=${title}-${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    mx: (theme) => `${theme.space.spacing3}`,
                    '&:first-of-type': { mx: 0 },
                    my: (theme) => `${theme.space.spacing2}`,
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                  }}
                  className='block mx-2 first-of-type:mx-0 my-1 font-semibold rounded-default'
                >
                  <FaWhatsappSquare
                    sx={{ fontSize: (theme) => `${theme.fontSizes.h4}` }}
                    className='text-h4'
                    color="#25d366"
                  />
                </a>
              </div>
            </>
          )}
          {!post.is_page && false && (
            <div>
              <h4>Recent Posts</h4>
              <div sx={{ display: 'flex', flexWrap: 'wrap' }} className='flex flex-wrap'>
                {filteredPosts.map((p) => (
                  <div
                    key={p.id}
                    sx={{
                      flex: [null, null, '0 0 50%'],
                      maxWidth: [null, null, '50%'],
                      p: '1.5rem',
                      textAlign: 'left',
                    }}
                    className='md:flex md:grow-0 md:shrink-0 md:basis-[50%] md:max-w-[50%] p-6 text-left'
                  >
                    <a
                      href={`/${p.slug}`}
                      sx={{ display: 'flex', cursor: 'pointer' }}
                      className='flex cursor-pointer'
                    >
                      <StoryCard cardStyle="tulip" storyData={p} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
