module.exports = {
  signup: function(params, callback) {
    callback(null, { context: 'signup' });
  },

  login: function(params, callback) {
    callback(null, { context: 'login' });
  }
};
