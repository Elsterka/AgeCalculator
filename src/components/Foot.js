import React, { Component } from "react";
import styles from '../components/modules/style.module.css';

export default class Foot extends Component {
  render() {
    const { displayYear, displayMonth, displayDay } = this.props;

    return (
      <>
        <div>
          <div className={styles.align4}>
            <div id="displayYear" className={styles.letters}>{displayYear}</div>
            <div className={styles.letter}>years</div>
          </div>
          <div className={styles.align2}>
            <div id="displayMonth" className={styles.letters}>{displayMonth}</div>
            <div className={styles.letter}>months</div>
          </div>
          <div className={styles.align5}>
            <div id="displayDay" className={styles.letters}>{displayDay}</div>
            <div className={styles.letter}>days</div>
          </div>
        </div>
      </>
    );
  }
};