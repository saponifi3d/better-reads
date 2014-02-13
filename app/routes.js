module.exports = function(match) {
  match('',        'home#index');
  match('/signup', 'auth#signup');
  match('/login',  'auth#login');
};
