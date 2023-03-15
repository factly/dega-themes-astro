// converted
import React from 'react'; // eslint-disable-line no-unused-vars

/**
 * TODO: 1. Add transitions, borderWidth, borderRadius to theme-ui
 */
const Tag = ({ url, name }) => {
  return (
      <a href={`/tag/${url}`} 
        sx={{
          textAlign: 'center',
          color: (theme) => `${theme.colors.textTag}`,
          fontSize: (theme) => `${theme.fontSizes.h8}`,
          borderWidth: '1px',
          borderColor: (theme) => `${theme.colors.borderTag}`,
          borderRadius: 'default',
          p: (theme) => `${theme.space.spacing3}`,
          m: (theme) => `${theme.space.spacing3}`,
          bg: (theme) => `${theme.colors.bgTag}`,
          transition: '0.3s',
          '&:hover': {
            color: (theme) => `${theme.colors.textTagHover}`,
            bg: (theme) => `${theme.colors.bgTagHover}`,
          },
        }}
        className='text-textTag text-center text-h8 border-[1px] border-borderTag rounded-default p-2 m-2 bg-bgTag transition duration-300 hover:text-textTagHover hover:bg-bgTagHover'
      >
        {name}
      </a>
  );
};

export default Tag;
