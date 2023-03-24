import React from 'react'; // eslint-disable-line no-unused-vars
/**
 * TODO: 1. Add transitions, borderWidth, borderRadius to theme-ui
 */
const Badge = ({ url, name }) => {
  return (
    <Link
      to={`/category/${url}`}
      // sx={{
      //   m: (theme) => `${theme.space.spacing3}`,
      //   bg: '#000',
      //   transition: '0.3s',
      //   '&:hover': {
      //     //color: 'white',
      //     bg: 'green',
      //   },
      //   display: 'inline-flex',
      //   px: '20px',
      //   height: '32px',
      //   lineHeight: '32px',
      //   fontSize: '.875rem',
      //   fontWeight: 500,
      //   position: 'relative',
      //   borderRadius: '16px',
      //   color: 'white',
      // }}
      className="font-[500] text-[14px] text-[#ea364a] leading-[20px] text-center items-center p-[2px_10px]"
    >
      {name}
    </Link>
  );
};

export default Badge;
