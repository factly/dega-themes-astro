/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

/**
 * TODO: 1. Add transitions, borderWidth, borderRadius to theme-ui
 */
const Badge = ({ url, name }) => {
  return (
    <a
      href={`/category/${url}`}
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
      sx={{
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#7855F7',
        background: '#F4F1FF',
        borderRadius: '16px',
        alignItems: 'center',
        padding: '2px 10px',
      }}
    >
      {name}
    </a>
  );
};

export default Badge;
