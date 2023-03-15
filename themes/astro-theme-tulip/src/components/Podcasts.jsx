/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

const PodcastsPage = () => {
  const unviralImg = '/unviral.jpg';
  const appleLogo = '/podcastBadges/apple.svg';
  const spotifyLogo = '/podcastBadges/spotify.svg';
  const googleLogo = '/podcastBadges/google.svg';
  const amazonLogo = '/podcastBadges/amazon.png';
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.buzzsprout.com/1663999.js?container_id=buzzsprout-large-player-1663999&player=large';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  let aStyle = "inline-block p-spacing2"
  let imgStyle = "inline-block max-h-[10px] transition duration-300 hover:scale-110"

  return (
    <>
      <div
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          textAlign: 'center',
          px: (theme) => `${theme.space.spacing6}`,
        }}
        className='max-w-[1200] mx-auto text-center px-spacing6'
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', null, '1fr 1fr'],
            pt: (theme) => `${theme.space.spacing7}`,
            mb: (theme) => `${theme.space.spacing7}`,
          }}
          className='grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] pt-spacing7 mb-spacing7'
        >
          <div>
            <img
              src={unviralImg}
              alt="Un-Viral"
              sx={{
                maxWidth: [150, 200, 250],
                maxHeight: [150, 200, 250],
                height: '100%',
                width: 'auto',
                mx: 'auto',
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
                borderRadius: 4,
              }}
              className='max-w-[150] sm:max-w-[200] md:max-w-[250] h-full w-auto mx-auto shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)] rounded-[4px]'
            />
          </div>
          <div sx={{ alignSelf: 'center', mt: [(theme) => `${theme.space.spacing6}`, null, 0] }} className='self-center mt-spacing6 md:mt-0'>
            <h1
              sx={{
                textAlign: 'center',
                fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
              }}
              className='text-center text-h5 sm:text-h4'
            >
              Un-Viral
            </h1>
            <p
              sx={{
                fontSize: [(theme) => `${theme.fontSizes.h7}`, (theme) => `${theme.fontSizes.h6}`],
              }}
              className='text-h7 sm:text-h6'
            >
              Un-Viral is a podcast from Factly where we tackle that dangerous combination of the
              two kinds of virality—misinformation about health. Tune in to discern the real from
              the fake, and remember to Un-Viral.{' '}
            </p>
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: (theme) => `${theme.space.spacing5}`,
                a: {
                  display: 'inline-block',
                  p: (theme) => `${theme.space.spacing3}`,
                },
                img: {
                  display: 'inline-block',
                  maxHeight: 10,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
              className='flex flex-wrap justify-center mt-spacing5'
            >
              <a
                href="https://podcasts.apple.com/in/podcast/un-viral/id1552026867"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Apple Podcasts"
                className={aStyle}
              >
                <img src={appleLogo} className={imgStyle} alt="Listen on Apple Podcasts" />
              </a>
              <a
                href="https://open.spotify.com/show/1p5LnkBABZuLV4jsd6LqWo"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Spotify Podcasts"
                className={aStyle}
              >
                <img src={spotifyLogo}
                className={imgStyle} 
                alt="Listen on Spotify Podcasts"  />
              </a>
              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNjYzOTk5LnJzcw=="
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Google Podcasts"
                className={aStyle}
              >
                <img src={googleLogo} 
                className={imgStyle}
                alt="Listen on Google Podcasts" />
              </a>
              <a
                href="https://music.amazon.com/podcasts/dbf5062a-af36-428a-acd1-57f2d37cad2a"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Amazon Podcasts"
                className={aStyle}
              >
                <img src={amazonLogo} alt="Listen on Amazon Podcasts" className={imgStyle} />
              </a>
            </div>
          </div>
        </div>

        <div sx={{ width: '100%', my: (theme) => `${theme.space.spacing6}` }} className='w-full my-spacing6'>
          <div id="buzzsprout-large-player-1663999"></div>
        </div>
      </div>
    </>
  );
};

export default PodcastsPage;
