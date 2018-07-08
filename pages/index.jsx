import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Home } from './Home';
import { LoginPage } from './LoginPage';

export const Routes = (
    <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
    </Fragment>
);
