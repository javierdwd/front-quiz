import React from 'react';

import LogoImage from '../../../static/navbar_logo.svg';

const Logo = () => (
  <div className="logo">
    <a href="/">
      <img src={LogoImage} alt="Levi's Shopping Cart"/>
    </a>
  </div>
);

export default Logo;
