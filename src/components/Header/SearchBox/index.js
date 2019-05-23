import React from 'react';

import Icon from '../../../static/searchbox-icon.svg'
import './style.scss';

const SearchBox = () => (
  <div className="header__search-box search-box">
    <form className="search-box__form">
      <input type="text" name="q" className="search-box__query" aria-label="Filtro de búsqueda" />
      <button type="submit" className="search-box__button" aria-label="Buscar">
        <img src={Icon} alt="Buscar" />
      </button>
    </form>
  </div>
);

export default SearchBox;
