import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';

// TODO this is not ideal
const KEY = 'rlBQOpaINpECDEMKhDEx9g';

export class Login extends Component {
    onSubmit = (values) => {
        console.log({ values });
    }

    renderForm = ({ values, isSubmitting, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="user"
                    onChange={handleChange}
                    value={values.user}
                />
            </div>

            <div>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                />
            </div>

            <button type="submit" disabled={isSubmitting}>
                Log in
            </button>
        </form>
    )

    render() {
        return (
            <Fragment>
                <h1>Log in</h1>
                <Formik
                    initialValues={{ user: '', password: '' }}
                    onSubmit={this.onSubmit}
                    render={this.renderForm}
                />
            </Fragment>
        );
    }
}
