import React, { useState, useEffect } from 'react';
import { FaHome, FaBars } from 'react-icons/fa';
import ActiveLink from '../ActiveLink';

export default function NavBar({ logo, data }) {
  const { menu, categories, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width >= 1024) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <div>
      <div
        className='my-2 mx-auto text-center flex justify-center'
      >
        <a href="/"
          className='mx-auto'
         >
          <img
            src={space?.logo?.url?.proxy || `/logo.png`}
            alt={space.site_title}
            className='max-w-[10rem] block mx-auto'
          />
        </a>
      </div>
      <div
        style={{
          boxShadow: 'inset 0 -15px 5px -16px #111',
        }}
        className='flex lg:justify-center text-[0.75rem] overflow-x-scroll scrollbar-none'
      >
        {mainMenu?.menu.map((item) => (
          <ActiveLink
            href={item.url}
            key={item.title}
            passHref
            activeClassName="active"
          >
            <a
              style={{
                p: '1rem 1.5rem',
                display: 'block',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                '&:not(:first-of-type)': {
                  position: 'relative',
                },
                '&:not(:first-of-type)::before': {
                  borderLeft: '1px solid #ea364a',
                  content: `""`,
                  height: '1rem',
                  left: '-.5px',
                  overflow: 'hidden',
                  position: 'absolute',
                },
              }}
              className='p-[1rem_1.5rem] block uppercase whitespace-nowrap'
            >
              {item.name}
            </a>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
}
