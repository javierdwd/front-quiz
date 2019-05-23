import React from 'react';

import Toggle from './Toggle';

import './style.scss';

class Navbar extends React.Component {
  state = {
    isOpen: false
  };

  openHandler = () => {
    this.setState({ isOpen: true });
  };
  closeHandler = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="header__navbar">
        <Toggle
          action="open"
          label="Abrir"
          onClick={this.openHandler}
        />

        <nav className={`navbar navbar--${this.state.isOpen ? 'open' : 'closed'}`}>
          <Toggle
            action="close"
            label="Cerrar"
            onClick={this.closeHandler}
          >x</Toggle>
          <ul className="navbar__menu">
            <li className="navbar__item navbar__item--has-children">
              <a href="/hombre" className="navbar__link navbar__link--text-center">Hombre</a>
              <button className="navbar__plus"><i>+</i></button>

              <ul className="navbar__submenu">
                <li className="navbar__item">
                  <a href="/hombre-jeans" className="navbar__link">Jeans</a>
                </li>
                <li className="navbar__item">
                  <a href="/hombre-remeras" className="navbar__link">Remeras</a>
                </li>

                <li className="navbar__item navbar__item--has-children">
                  <a href="/hombre" className="navbar__link navbar__link--text-center">Sale!</a>
                  <button className="navbar__plus"><i>+</i></button>

                  <ul className="navbar__submenu">
                    <li className="navbar__item">
                      <a href="/hombre-sale" className="navbar__link">Promo 1</a>
                    </li>
                    <li className="navbar__item">
                      <a href="/hombre-sale" className="navbar__link">Promo 2</a>
                    </li>
                  </ul>
                </li>

              </ul>
            </li>

            <li className="navbar__item navbar__item--has-children">
              <a href="/mujer" className="navbar__link navbar__link--text-center">Mujer</a>
              <button className="navbar__plus"><i>+</i></button>

              <ul className="navbar__submenu">
                <li className="navbar__item">
                  <a href="/mujer-jeans" className="navbar__link">Jeans</a>
                </li>
                <li className="navbar__item">
                  <a href="/mujer-remeras" className="navbar__link">Remeras</a>
                </li>
              </ul>
            </li>

            <li className="navbar__item">
              <a href="/contacto" className="navbar__link navbar__link--text-center">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="navbar__backdrop"></div>
      </div>
    )
  }
};

export default Navbar;
