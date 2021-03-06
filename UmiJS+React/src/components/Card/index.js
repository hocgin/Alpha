import React, { Component } from 'react';
import styles from './index.less';

export default class Card extends Component {


    render() {
        return (
          <div className={styles.card}>
            <div className={styles.header}></div>
            <div className={styles.body}>
              <div className={styles.image}></div>
            </div>
            <div className={styles.footer}>
              <a className={styles.tag} href="#标签">{this.props.tag}</a>
            </div>
          </div>
        );
    }
};
