import React from 'react'; // eslint-disable-line no-unused-vars
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import PostGrid from '@components/PostGrid';

function UserDetailsAll({ data }) {
  const { dega } = data;
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

  const name = data.user.display_name
    ? `${data.user.display_name}`
    : `${data.user.first_name} ${data.user.last_name}`;

  const header = (item) => {
    return (
      <div sx={{ mb: (theme) => `${theme.space.spacing5}`, px: (theme) => theme.space.layout2 }} className='mb-spacing5 px-layout2'>
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
            className='rounded-[50%] w-10 h-10 mx-auto p-spacing8'
          />
        )}
        <h1
          sx={{
            fontSize: (theme) => `${theme.fontSizes.h4}`,
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
          className='text-h4 mb-spacing5 capitalize'
        >
          {name}
        </h1>
        {item.description && (
          <p sx={{ pb: (theme) => `${theme.space.spacing5}` }} className='pb-spacing5'>{item.description}</p>
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
                className='mr-spacing3'
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
      <PostGrid
        type="author"
        posts={data.posts.nodes}
        formats={data.formats.nodes}
        item={data.user}
        header={header}
        useSlug={false}
      />
    </>
  );
}

export default UserDetailsAll;