import React, { Component } from 'react';
import SearchIcon from 'react-icons/lib/go/search';
import cx from 'classnames';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';


import styles from './Search.css';

export class Search extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Input endAdornment={<SearchIcon className={styles.icon} />} />
            </div>
        );
    }
}
