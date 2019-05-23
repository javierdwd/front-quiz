import React, { Component } from 'react';

import Header from '../Header';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Filter />
          <Shelf />
        </main>
        <FloatCart />
      </React.Fragment>
    );
  }
}

export default App;
