import React from 'react';

const SearchBox = () => (
  <div className="search-box">
    <form>
      <input type="text" name="q" />
      <button type="submit"><span>Buscar</span></button>
    </form>
  </div>
);

export default SearchBox;
