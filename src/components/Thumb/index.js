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

  componentDidMount() {
    this.displayImage(this.props.src, 'front');
  }

  static defaultProps = {
    srcBack: null
  };

  state = {
    backCacheReady: false,
    frontCacheReady: false,
    displayMode: null
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
    const { state } = this;

    if(state[`${mode}CacheReady`]) {
      this.setState({ displayMode: mode });

      return;
    }

    try {
      await this.preloadImg(imgSrc);

      this.setState({
        displayMode: mode,
        [`${mode}CacheReady`]: true
      });
    }
    catch(e) {
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

    return (
      <div className={classes}>
        {this.state.displayMode &&
          <img
            src={this.state.displayMode === 'front' ? src : srcBack}
            alt={alt}
            title={title}
            onMouseEnter={this.displayBack}
            onMouseLeave={this.displayFront} />
        }
      </div>
    );
  }
};

export default Thumb;
