import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__menu">
      <li className="navbar__item navbar__item--has-children">
        <a href="/" className="navbar__link">Hombre</a>

        <ul className="navar__submenu">
          <li className="navbar__item">
            <a href="/" className="navbar__link">Sub-Link 1</a>
            <a href="/" className="navbar__link">Sub-Link 1</a>
            <a href="/" className="navbar__link">Sub-Link 1</a>

          </li>
        </ul>
      </li>

      <li className="navbar__item navbar__item--has-children">
        <a href="/" className="navbar__link">Mujer</a>

        <ul className="navar__submenu">
          <li className="navbar__item">
            <a href="/" className="navbar__link">Sub-Link 1</a>
            <a href="/" className="navbar__link">Sub-Link 1</a>
            <a href="/" className="navbar__link">Sub-Link 1</a>

          </li>
        </ul>
      </li>

      <li className="navbar__item">
        <a href="/" className="navbar__link">Contacto</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
