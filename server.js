const express = require('express');
const { OAuth2 } = require('oauth');

const app = express();

const KEY = 'rlBQOpaINpECDEMKhDEx9g';
const SECRET = 'QQiStHKuALuNobXhrcNilsuSNbYy8U1cJNiD2VrCk';

const oauth2 = new OAuth2(
    KEY,
    SECRET,
    'https://goodreads.com/oauth/authorize',
    null,
    'oauth2/token',
    null
);

app.use('/oauth', (req, res, next) => {
    oauth2.getOAuthAccessToken(
        '',
        { grant_type: 'client_credentials' },
        () => next()
    );
});

app.listen(3001, () => {
    // eslint-disable-next-line no-console
    console.log('started on port 3001');
});
