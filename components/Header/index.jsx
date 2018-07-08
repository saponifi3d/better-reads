import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { Logo } from '../Logo';
import { Search } from '../Search';
import { Navigation } from './Navigation';

import styles from './Header.css';

export class Header extends Component {
    render() {
        return (
            <AppBar className={styles.header}>
                <Toolbar>
                    <Logo className={styles.logo} />

                    {/* <Search /> */}
                    <Navigation />
                </Toolbar>
            </AppBar>
        );
    }
}
