import React  from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

import './style.scss';

const Header = () => (
  <div className="header-container">
    <header className="header">
      <Logo />
      <Navbar />
      <SearchBox />
    </header>
  </div>
);

export default Header;
