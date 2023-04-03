/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

export default function NavBar({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { menu, space } = data;
  const mainMenu = menu.nodes.filter((i) => i.slug === 'main')[0];

  const defaultMenuItems = [
    { url: '/categories', title: 'Categories', name: 'Categories' },
    { url: '/authors', title: 'Authors', name: 'Authors' },
  ];

  return (
    <div className={isMenuOpen ? 'is-head-open' : ''}>
      <header id="sc-head" className="sc-head sc-outer">
        <div className="sc-head-inner sc-inner">
          <div className="sc-head-brand">
            <div className="sc-head-brand-wrapper">
              <a className="sc-head-logo" href="/">
                {space.name}
              </a>
            </div>

            <button className="sc-burger" onClick={() => setIsMenuOpen((prev) => !prev)}></button>
          </div>

          <nav className="sc-head-menu">
            <ul className="nav">
              <li className="nav-home nav-current">
                <a href="/">Home</a>
              </li>
              {!mainMenu?.menu &&
                defaultMenuItems.map((item) => (
                  <li className="nav-author" key={item.title}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              {mainMenu?.menu.map((item) => (
                <li className="nav-collection" key={item.title}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
              {}
            </ul>
          </nav>

          {/* <div className="sc-head-actions">
            
          </div> */}
        </div>
      </header>
    </div>
  );
}
