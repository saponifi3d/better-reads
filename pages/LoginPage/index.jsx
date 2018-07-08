import React, { Component } from 'react';
import styles from './LoginPage.css';
import { Login } from '../../components/Login';

export class LoginPage extends Component {
    state = {
        toggleSignup: true,
    }

    render() {
        return (
            <section className={styles.center}>
                <div className={styles.box}>
                    { this.state.toggleSignup ? 
                        <Login /> :
                        <h1>Sign Up</h1>
                    }
                </div>
            </section>
        );
    }
}
