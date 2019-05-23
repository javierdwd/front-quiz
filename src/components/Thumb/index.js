import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumb extends Component {
  static propTypes = {
    alt: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.string,
    src: PropTypes.string.isRequired,
    srcBack: PropTypes.string
  };

  static defaultProps = {
    srcBack: null
  };

  state = {
    displayMode: 'front'
  };

  displayBack = () => {
    const { props } = this;

    if(!props.srcBack) {
      return false;
    }

    this.setState({ displayMode: 'back' });
  }

  displayFront = () => {
    this.setState({ displayMode: 'front' });
  }

  render() {
    const {
      alt,
      title,
      classes,
      src,
      srcBack
    } = this.props;

    return (
      <div className={classes}>
        <img
          src={this.state.displayMode === 'front' ? src : srcBack}
          alt={alt}
          title={title}
          onMouseEnter={this.displayBack}
          onMouseLeave={this.displayFront} />
      </div>
    );
  }
};

export default Thumb;
