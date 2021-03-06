import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    event.code === 'Escape' && this.props.onClose();
  };

  handleOverlayClick = event => {
    event.currentTarget === event.target && this.props.onClose();
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
