import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import UserIcon from 'react-icons/lib/md/account-circle';

import { Logo } from '../Logo';
import { Search } from '../Search';
import styles from './Header.css';

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo />

                <div className={styles.headerRight}>
                    <Link to="/login" style={{ color: 'currentColor' }}>
                        <UserIcon style={{ fontSize: 40 }} />
                    </Link>
                </div>
            </header>
        );
    }
}
