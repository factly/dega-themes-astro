import React from 'react'; // eslint-disable-line no-unused-vars

const Footer = ({ space }) => (
  <footer
    sx={{
      width: '100%',
      py: '2rem',
      bg: '#eff8fa',
    }}
    className="w-full py-8 bg-[#eff8fa]"
  >
    <h2
      sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', mb: '1rem' }}
      className="text-center flex justify-center mb-4"
    >
      {' '}
      <a
        href="/"
        sx={{
          display: 'flex',
          mx: 'auto',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '2.75rem',
          lineHeight: 1,
          fontWeight: 'bold',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        className="flex mx-auto text-center uppercase text-[2.75rem] font-bold hover:underline"
      >
        {space.name}
      </a>
    </h2>
    <p sx={{ textAlign: 'center' }} className="text-center">
      © 2022 Dodo Theme - Created and maintained by Factly Media and Research
    </p>
  </footer>
);

export default Footer;
