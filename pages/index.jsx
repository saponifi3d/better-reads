import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Home } from './Home';
import { Login } from './Login';

export const Routes = (
    <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
    </Fragment>
);
