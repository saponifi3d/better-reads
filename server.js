const express = require('express');
const app = express();
const OAuth = require('oauth');
const OAuth2 = OAuth.OAuth2;

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
       {'grant_type':'client_credentials'},
       function (e, access_token, refresh_token, results) {
           console.log('bearer: ', access_token);
           next();
       }
    );
});

app.listen(3001, () => {
    console.log('started on port 3001');
});
