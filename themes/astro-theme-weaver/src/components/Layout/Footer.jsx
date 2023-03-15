const Footer = () => (
  <footer
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#143F6B',
      color: '#98A2B3',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      p: '2rem',
      mt: '3rem',
    }}
    className="flex justify-between items-center bg-[#143F6B] text-[#98A2B3] font-normal text-base leading-6 p-8 mt-12"
  >
    <p>© {new Date().getFullYear()} Weaver - All rights reserved</p>
    <p>
      Powered by{' '}
      <a
        href="https://dega.factly.in"
        sx={{
          fontWeight: 600,
          color: '#F55353',
        }}
        className="font-semibold text-[#F55353]"
      >
        Dega
      </a>
    </p>
  </footer>
);

export default Footer;
