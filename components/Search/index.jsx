import React, { Component } from 'react';
import SearchIcon from 'react-icons/lib/go/search';
import cx from 'classnames';

import styles from './Search.css';

export class Search extends Component {
    render() {
        return (
            <div className={cx(styles.search, this.props.className)}>
                <input type="text" className={styles.input} placeholder="search" />
                <SearchIcon className={styles.icon} />
            </div>
        );
    }
}
