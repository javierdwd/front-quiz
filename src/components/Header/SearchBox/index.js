import React from 'react';
import PropTypes from 'prop-types';

import { updateQFilter } from '../../../services/filters/actions';

import { connect } from 'react-redux';
import Icon from '../../../static/searchbox-icon.svg'
import './style.scss';

const handleSubmit = (props) => (event) => {
  event.preventDefault();

  props.updateQFilter(event.target.querySelector('input[type="text"]').value);
}

const SearchBox = (props) => (
  <div className="header__search-box search-box">
    <form
      className="search-box__form"
      onSubmit={handleSubmit(props)}
    >
      <input type="text" name="q" className="search-box__query" aria-label="Filtro de búsqueda" />
      <button type="submit" className="search-box__button" aria-label="Buscar">
        <img src={Icon} alt="Buscar" />
      </button>
    </form>
  </div>
);


SearchBox.propTypes = {
  updateQFilter: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateQFilter }
)(SearchBox);
