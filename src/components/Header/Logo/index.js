import React from 'react';

import LogoImage from '../../../static/navbar-logo.svg';
import './style.scss';

const Logo = () => (
  <div className="header__logo logo">
    <a href="/" className="logo__link">
      <img className="logo__image" src={LogoImage} alt="Levi's Shopping Cart"/>
    </a>
  </div>
);

export default Logo;
