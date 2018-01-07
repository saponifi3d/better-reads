import React, { Component, Fragment } from 'react';
import { Header } from '../Header';
import styles from './App.css';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <article className={styles.app}>
                    { this.props.children }
                </article>
            </Fragment>
        );
    }
}
