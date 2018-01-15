import React, { Component } from 'react';

import { Logo } from '../Logo';
import { Search } from '../Search';
import { Navigation } from './Navigation';

import styles from './Header.css';

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo />

                <div className={styles.headerRight}>
                    <Navigation />
                </div>
            </header>
        );
    }
}
