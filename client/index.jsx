import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { App } from '../components/App';
import { Routes } from '../pages';

function Application() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <App>
                    { Routes }
                </App>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('react-app')
);
