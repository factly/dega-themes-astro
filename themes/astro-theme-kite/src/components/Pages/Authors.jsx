import * as React from 'react'; // eslint-disable-line no-unused-vars
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';

function AuthorsListPage({ data }) {
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
        // return <FaEnvelope size="1.75rem" color="#172b4d" />;
        return <div></div>
      default:
        return <FaLink size="1.75rem" />;
    }
  };
  return (
    <>
      <div sx={{ fontSize: '32px', px: '24px', maxWidth: '424px', mx: 'auto', mb: '24px' }}
        className='text-[32px] px-6 max-w-[424px] mx-auto mb-6'
      >
        <h1>
          Authors
        </h1>
      </div>
      <div sx={{ bg: '#D6BBFB', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '424px', mx: 'auto', py: '60px', px: '48px', mb: '48px' }} className='bg-[#D6BBFB] flex flex-col gap-6 max-w-[424px] mx-auto py-[60px] px-[48px] mb-[48px]'>
        {data.users.nodes.map((author) => (
          <>
            <a sx={{ display: 'flex', justifyContent: 'center' }} className='flex justify-center' href={`/author/${author.slug}/`}>
              <img sx={{ width: '96px', height: '96px', bg: '#000', borderRadius: '50%', objectFit: 'cover', maxWidth: "100%" }} className='w-[96px] h-[96px] bg-black rounded-[50%] object-cover max-w-full' src="https://source.unsplash.com/random" alt="" />
            </a>

            <a href={`/author/${author.slug}/`} sx={{
              textAlign: 'center',
              fontWeight: 700,
              "&:hover": {
                textDecoration: "underline",
              }
            }}
              className='text-center font-bold hover:underline'
            >{author.display_name}</a>
            <div sx={{ display: 'flex', justifyContent: 'center' }} className='flex justify-center'>
              {author.social_media_urls &&
                Object.keys(author.social_media_urls).map((name) => (
                  <a
                    key={name}
                    title={name}
                    href={author.social_media_urls[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mr: (theme) => `${theme.space.spacing3}` }}
                    className='mr-3'
                  >
                    {getIcon(name)}
                  </a>
                ))}
              <a href={`mailto:${author.email}`} title="email">
                {getIcon('email')}
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default AuthorsListPage;
