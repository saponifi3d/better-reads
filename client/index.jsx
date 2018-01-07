import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '../components/App';
import { Routes } from '../pages';

function Application() {
    return (
        <BrowserRouter>
            <App>
                { Routes }
            </App>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('react-app')
);
