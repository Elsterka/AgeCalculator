import React, { Component } from "react";
import styles from '../components/modules/style.module.css';
import Icon from '../icons/icon-arrow.svg';

export default class Mid extends Component {
  handleButtonClick = () => {
   
    this.props.handleButtonClick();
  };

  render() {
    return (
      <>
        <div className={styles.aligns}>
          <hr className={styles.CustomLine} />
          <button
            id="button"
            className={styles.buttonn}
            onClick={this.handleButtonClick}
          >
            <img src={Icon} alt="Desc img" />
          </button>
        </div>
      </>
    );
  }
};