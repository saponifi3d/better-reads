import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Home.css';

export function Home() {
    return (
        <Fragment>
            <section className={cx(styles.hero, styles.spacing)}>
                <h1>What are you reading?</h1>
            </section>

            <section className={styles.spacing}>
                <h2>What is BetterReads?</h2>
                <p>
                    <em>BetterReads</em> is a new user interface for&nbsp;
                    <a target="_blank" href="https://www.goodreads.com/">Good Reads</a>.
                    We've found that Good Reads is a great website to connect to
                    friends and see what they're reading. However, the UI is a
                    bit cluttered, hard to use, and <strong>slow</strong>.
                </p>

                <p>
                    To improve upon Good Reads, we've created a new UI ontop of
                    the Good Reads API. That means that if you use Good Reads,
                    all of your data will already be on <em>BetterReads!</em>
                </p>
            </section>

            <section className={styles.spacing}>
                <h2>What are your friends reading?</h2>
                <p>
                    Keep up to date with what your friends are reading.
                    With <em>BetterReads</em> you can see your friends book 
                    reviews, what they're reading, and what they want to read.
                </p>
            </section>
        </Fragment>
    );
}
