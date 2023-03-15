import React, { useState, useEffect } from 'react';

/**
 * @component Navbar
 * @typedef Props
 * @prop {string} logo - url for logo
 * @param {Props} props - arguments for Navbar with logo and menu properties
 * @param {string} props.logo - url for logo
 * @param {Object} props.menu - menu item
 */

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];

  return (
    <React.Fragment>
      <header
        id="de-head"
        className={`de-head outer  ${isMenuOpen ? 'de-head-open has-cover' : ''}`}
      >
        <nav className="de-head-inner inner">
          <div className="de-head-brand">
            <a className="de-head-logo no-image" href="/">
              {!space?.logo?.url?.proxy &&
                (space?.title?.toUpperCase() || space?.name?.toUpperCase())}
            </a>
            <div className="de-head-brand-wrapper">
              <button
                className="de-burger"
                role="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <div className="de-burger-box">
                  <div className="de-burger-inner"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="de-head-menu">
            <ul className="nav">
              <li className="nav-home">
                <a href="/">Home</a>
              </li>
              {!mainMenu?.menu &&
                defaultMenuItems.map((item) => (
                  <li key={item.title}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              {mainMenu?.menu.map((item) => (
                <li key={item.title}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
