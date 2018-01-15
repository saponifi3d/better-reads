import React, { Component } from 'react';
import styles from './Login.css';

console.log({ styles });

export class Login extends Component {
    state = {
        toggleSignup: true,
    }

    render() {
        return (
            <section className={styles.center}>
                <div className={styles.box}>
                    { this.state.toggleSignup ? 
                            <h1>Log-in</h1> :
                            <h1>Sign Up</h1>
                    }
                </div>
            </section>
        );
    }
}
