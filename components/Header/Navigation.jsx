import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from 'react-icons/lib/md/account-circle';

export class Navigation extends Component {
    render() {
        return (
            <Link to="/login" style={{ color: 'currentColor' }}>
                <UserIcon style={{ fontSize: 40 }} />
            </Link>
        );
    }
}
