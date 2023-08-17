import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { FaLink } from '@react-icons/all-files/fa/FaLink'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare'

import PostGrid from '../PostGrid';
import Seo from '@components/Seo';

function UserDetailsAll({ data }) {
  const { user, posts, formats } = data;
  const getIcon = (name) => {
    switch (name) {
      case 'twitter':
        return <FaTwitterSquare color="#1da1f2" size="1.75rem" />;
      case 'facebook':
        return <FaFacebookSquare color="#3b5998" size="1.75rem" />;
      case 'instagram':
        return <FaInstagramSquare color="#e1306c" size="1.75rem" />;
      case 'linkedin':
        return <FaLinkedin size="1.75rem" color="#0077b5" />;
      case 'email':
        return <FaEnvelope size="1.75rem" color="#172b4d" />;
      default:
        return <FaLink size="1.75rem" />;
    }
  };

  const name = user.display_name ? `${user.display_name}` : `${user.first_name} ${user.last_name}`;

  const header = (item) => {
    return (
      <div sx={{ mb: (theme) => `${theme.space.spacing5}`, px: (theme) => theme.space.layout2 }} className='mb-5 px-2'>
        {item.medium && (
          <img
            src={item.medium?.url.proxy}
            alt=""
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
              mx: 'auto',
              padding: (theme) => `${theme.space.spacing8}`,
            }}
            className='radius-[50%] w-[40px] h-[40px] mx-auto p-8'
          />
        )}
        <h1
          sx={{
            fontSize: (theme) => `${theme.fontSizes.h4}`,
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
          className='mb-5 capitalize'
        >
          {name}
        </h1>
        {item.description && (
          <p sx={{ pb: (theme) => `${theme.space.spacing5}` }} className='pb-5'>{item.description}</p>
        )}

        <div sx={{ display: 'flex' }} className='flex'>
          {item.social_media_urls &&
            Object.keys(item.social_media_urls).map((name) => (
              <a
                key={name}
                title={name}
                href={item.social_media_urls[name]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: (theme) => `${theme.space.spacing3}` }}
                className='mr-3'
              >
                {getIcon(name)}
              </a>
            ))}
          <a href={`mailto:${item.email}`} title="email">
            {getIcon('email')}
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      <Seo title={name} />
      <PostGrid
        type="author"
        posts={posts?.nodes}
        formats={formats?.nodes}
        item={user}
        header={header}
        useSlug={false}
      />
    </>
  );
}

export default UserDetailsAll;
