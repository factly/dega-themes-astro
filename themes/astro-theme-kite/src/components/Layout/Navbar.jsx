import React, { useState, useEffect } from 'react';
// import { FaHome, FaBars, FaTimes } from 'react-icons/fa/index';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import isBrowser from '@helpers/isBrowser';

/**
 * @component Navbar
 * @typedef Props
 * @prop {string} logo - url for logo
 * @param {Props} props - arguments for Navbar with logo and menu properties
 * @param {string} props.logo - url for logo
 * @param {Object} props.menu - menu item
 */

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];

  return (
    <div data-header="sticky">
      <header className="header">
        <div className="container mx-[0_!important]">
          <div className="row">
            <div className="col-xs-12 header__left flex items-center">
              <a className="header__brand nav-current" href="/">
                {' '}
                <img className="header__logo" src={space.logo?.url?.proxy} alt="logo" />
              </a>
              <div className="flex-1"></div>

              <button
                className={`header__menu--toggle flex-cc js-menu-toggle ${
                  isOpen ? 'is-active' : ''
                }`}
                tabindex="0"
                type="button"
                title="Menu"
                aria-label="Menu"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <i className="icon icon-menu icon--sm">
                  <FaBars className="icon__svg" />
                </i>{' '}
                <i className="icon icon-x icon--sm">
                  <FaTimes className="icon__svg" />
                </i>{' '}
              </button>
            </div>

            <div className="col-md-6 col-lg-8 header__center middle-xs flex-1" tabindex="0">
              <ul className="nav" role="menu">
                <li role="menuitem">
                  <a href="/">
                    <span>Home</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="menu js-menu" data-menu-active={isOpen}>
        <ul className="nav" role="menu">
          <li role="menuitem">
            <a href="/">
              <i className="icon icon--sm">
                <FaHome />
              </i>{' '}
              <span>Home</span>
            </a>
          </li>
          {!mainMenu?.menu &&
            defaultMenuItems.map((item) => (
              <li role="menuitem" key={item.title}>
                <a href={item.url}>
                  <i className="icon icon--sm">
                    <FaHome />
                  </i>{' '}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          {mainMenu?.menu.map((item) => (
            <li role="menuitem" key={item.title}>
              <a href={item.url}>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
