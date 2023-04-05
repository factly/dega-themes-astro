import * as React from 'react'; // eslint-disable-line no-unused-vars

const Footer = () => (
  <footer>
    <div
      className='flex justify-around font-["Inter"] leading-6 text-[#545454] border border-t-[#545454] p-8 flex-wrap gap-8'
    >
      <p>Quail © {new Date().getFullYear()}</p>
      <div
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}
        className='flex flex-wrap gap-4'
      >
        <a>Data & privacy</a>
        <a>Contact</a>
      </div>
      <div
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}
        className='flex flex-wrap gap-4'
      >
        <a>Terms</a>
        <a>Privacy</a>
        <a>Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer;
