// converted
import React from 'react'; // eslint-disable-line no-unused-vars
import { FaRegClock } from 'react-icons/fa';
import parseDate from '@utils/parseDate';

/* 
 TODO 1. Add Author image above their names
 TODO 2. Improve multiple authors and categories
 TODO 3. Check for layout spacing issues
 */

const PostInfo = ({ users, categories, date }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }}
    className='flex flex-col justify-start items-start'
  >
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',

        fontSize: (theme) => `${theme.fontSizes.h7}`,
      }}
      className='flex flex-col text-h7'
    >
      <div className='flex flex-row flex-wrap items-baseline' sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline' }}>
        {users &&
          users.map((user, i, arr) => (
            <React.Fragment key={i}>
                <a href={`/author/${user.slug}`}
                  sx={{
                    fontWeight: 'medium',
                    color: (theme) => `${theme.colors.textLinkPrimary}`,
                    fontSize: (theme) => `${theme.fontSizes.h7}`,
                    px: (theme) => `${theme.space.spacing2}`,
                    '&:first-of-type': { pl: 0 },
                    '&:hover': {
                      color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                    },
                  }}
                  className='font-medium text-textLinkPrimary text-h7 px-1 hover:text-textLinkHoverPrimary first-of-type:pl-0'
                >
                  {' '}
                  {`${user?.first_name} ${user?.last_name}`}
                </a>
              {arr.length - i > 1 && (user?.first_name || user?.last_name) && ','}
            </React.Fragment>
          ))}

        {categories.length > 0 && (
          <>
            <span
              sx={{
                fontWeight: 'medium',
                fontSize: (theme) => `${theme.fontSizes.h7}`,
              }}
              className='font-medium text-h7'
            >
              in
            </span>
            {categories.map((category, i, arr) => (
              <React.Fragment key={i}>
                  <a href={`/category/${category.slug}`}
                    sx={{
                      px: (theme) => `${theme.space.spacing2}`,
                      fontWeight: 'medium',
                      color: (theme) => `${theme.colors.textLinkPrimary}`,
                      fontSize: (theme) => `${theme.fontSizes.h7}`,
                      '&:hover': {
                        color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                      },
                    }}
                    className='font-medium text-textLinkPrimary text-h7 px-1 hover:text-textLinkHoverPrimary'
                  >
                    {' '}
                    {category.name}
                  </a>
                {arr.length - i > 1 && ', '}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <span
        sx={{
          color: (theme) => `${theme.colors.textSecondary}`,
          fontSize: (theme) => `${theme.fontSizes.h8}`,
          display: 'flex',
          alignItems: 'center',
        }}
        className='text-textSecondary text-h8 flex items-center'
      >
        <FaRegClock sx={{ display: 'inline-block', mr: (theme) => `${theme.space.spacing2}` }} className='inline-block mr-1' />{' '}
        {parseDate(date)}
      </span>
    </div>
  </div>
);

export default PostInfo;
