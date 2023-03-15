// converted
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import theme from '@utils/theme.js';

const Layout = ({ children }) => {
  return (
    <main
      style={{ maxWidth: '1560px' }}
      sx={{
        width: 'full',
        fontSize: [
          (theme) => `${theme.fontSizes.h6}`,
          null,
          (theme) => `${theme.fontSizes.h5}`,
        ],
        color: (theme) => `${theme.colors.textPrimary}`,
        lineHeight: 'normal',
        pt: [(theme) => `${theme.space.spacing5}`, 0, 0],
        minHeight: 'calc(100vh - 60px)',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className='w-full text-h6 md:text-h5 leading-normal text-textPrimary pt-4 sm:pt-0 min-h-[calc(100vh-60px)] mx-auto flex flex-col justify-between box-border'
    >
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
