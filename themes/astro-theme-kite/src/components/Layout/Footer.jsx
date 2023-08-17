import React from 'react'; // eslint-disable-line no-unused-vars
// import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from '@react-icons/all-files';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub'

const Footer = () => (
  <footer className="flex flex-wrap mt-8 text-center justify-center items-center gap-8 bg-[#5F3CC0] text-[#D6BBFB] py-8">
    <p sx={{ mb: 0 }} className="mb-0">
      &copy; {new Date().getFullYear()} Kite - Created and maintained by Factly Media and Research
    </p>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
        fontSize: '24px',
      }}
      className="flex flex-row items-center gap-6 text-[24px]"
    >
      <a
        title="Tweet it"
        href={`https://twitter.com/share?text=${''}-&url=${''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>

      <a
        title="Share on WhatsApp"
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${''} - ${''}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <a title="Share on Github" href={''} target="_blank" rel="noopener noreferrer">
        <GoMarkGithub />
      </a>
      <a
        title="Share on Linkedin"
        href={`https://www.linkedin.com/sharer.php?u=${''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

export default Footer;
