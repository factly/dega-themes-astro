import React from 'react'; // eslint-disable-line no-unused-vars

const Footer = ({ space }) => (
  <footer
    className="w-full py-2 mb-8 bg-[#eff8fa]"
  >
    <h2
      className="text-center flex justify-center mb-[1rem]"
    >
      {' '}
      <a
        href="/"
        className="flex mx-auto text-center uppercase text-[2.75rem] font-bold hover:underline text-gray-900"
      >
        {space.name}
      </a>
    </h2>
    <p className='text-center'>
      © {new Date().getFullYear()} Harpy Theme - Created and maintained by Factly Media and Research
    </p>
  </footer>
);

export default Footer;
