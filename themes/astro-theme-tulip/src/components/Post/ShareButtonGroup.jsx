// converted
// eslint-disable-line no-unused-vars
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';

/**
 * TODO: Add other social links like pinterest, reddit, tumblr, email
 * TODO: fix uri and title when shared
 * TODO: Possibly add native share by using navigator.share
 * TODO: Button to expand shared sites list
 */

const ShareButtonGroup = ({ data, setRef }) => {
  const colors = {
    socialFacebook: '#3b5998',
    socialTwitter: '#1da1f2',
    socialWhatsapp: '#25d366',
    socialInstagram: '#fff',
    socialLinkedin: '#fff',
  }
  const { socialFacebook, socialTwitter, socialWhatsapp } = colors;
  const h4 = '2rem'
  let title = encodeURIComponent(data.title);
  // let url = encodeURIComponent(data.url)
  return (
    <div
      social-icon=""
      ref={setRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['flex-start', null, 'flex-end'],
        // fontSize: (theme) => `${theme.fontSizes.h4}`,
        '& a:first-of-type': { ml: 0 },
      }}
      className='flex items-center flex-start md:justify-end'
    >
      <a
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          // m: (theme) => `${theme.space.spacing2}`,
          fontWeight: 'semibold',
          borderRadius: 'default',
        }}
        className='block font-semibold rounded-default first-of-type:ml-0'
      >
        <FaFacebookSquare color={socialFacebook} fontSize={h4} />
      </a>
      {/* title uri ====> href={`https://twitter.com/share?text=${title}-&url=${data.url}`} */}
      <a
        title="Tweet it"
        href={`https://twitter.com/share?url=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          // m: (theme) => `${theme.space.spacing2}`,
          fontWeight: 'semibold',
          borderRadius: 'default',
        }}
        className='block font-semibold rounded-default'
      >
        <FaTwitterSquare color={socialTwitter} fontSize={h4} />
      </a>
      {/* title uri ===> href={`https://api.whatsapp.com/send?text=${title}-${data.url}`} */}
      <a
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${data.url}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          // m: (theme) => `${theme.space.spacing2}`,
          fontWeight: 'semibold',
          borderRadius: 'default',
        }}
        className='block font-semibold rounded-default'
      >
        <FaWhatsappSquare color={socialWhatsapp} fontSize={h4} />
      </a>
    </div>
  );
};

export default ShareButtonGroup;
