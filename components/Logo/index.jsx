import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.css'

export function Logo({ color = 'inherit', className = '' }) {
    return (
        <div className={className}>
            <Link to="/" style={{ textDecoration: 'none', color }}>
                <span className={styles.logo}>
                    better
                    <span>reads</span>
                </span>
            </Link>
        </div>
    );
}
