import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Thumb extends Component {
  static propTypes = {
    alt: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.string,
    src: PropTypes.string.isRequired,
    srcBack: PropTypes.string
  };

  componentDidMount() {
    this.displayImage(this.props.src, 'front');
  }

  static defaultProps = {
    srcBack: null,
    classes: '',

  };

  state = {
    backCacheReady: false,
    frontCacheReady: false,
    displayMode: null,
    statusClass: 'preloading'
  };

  preloadImg = (imgSrc) => {
    const img = new Image();

    return new Promise((resolve, reject) => {
      img.src = imgSrc;
      img.onload = resolve;
      img.onerror = reject;
    })
  };

  async displayImage(imgSrc, mode) {
    if(this.state[`${mode}CacheReady`]) {
      this.setState({
        statusClass: 'loaded',
        displayMode: mode
      });

      return;
    }

    try {
      this.setState({
        statusClass: 'preloading',
        displayMode: null
      });

      await this.preloadImg(imgSrc);

      this.setState({
        displayMode: mode,
        statusClass: 'loaded',
        [`${mode}CacheReady`]: true
      });
    }
    catch(e) {
      if(this.state.statusClass === 'preloading') {
        this.setState({
          statusClass: 'error'
        });
      }

      console.error(e);
    }
  }

  displayBack = () => {
    if(!this.props.srcBack) {
      return false;
    }

    this.displayImage(this.props.srcBack, 'back');
  }

  displayFront = () => {
    this.displayImage(this.props.src, 'front');
  }

  render() {
    const {
      alt,
      title,
      classes,
      src,
      srcBack
    } = this.props;

    const completeClasses = `${classes} thumb thumb--ratio-default thumb--${this.state.statusClass}`;

    return (
      <div
        className={completeClasses}
        onMouseEnter={this.displayBack}
        onMouseLeave={this.displayFront}
      >
        {this.state.displayMode &&
          <img
            src={this.state.displayMode === 'front' ? src : srcBack}
            alt={alt}
            title={title}
          />
        }
      </div>
    );
  }
};

export default Thumb;
