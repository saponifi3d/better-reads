import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.css'

export function Logo({ color = 'inherit' }) {
    return (
        <Link to="/" style={{ textDecoration: 'none', color }}>
            <h1 className={styles.logo}>
                better
                <span>reads</span>
            </h1>
        </Link>
    );
}
