var BaseView = require('./base');

module.exports = BaseView.extend({
  className: 'header',
  events: {
    'submit form': 'submitForm'
  },

  submitForm: function(e) {
    e.preventDefault();
    var search = this.$('input[name="search"]').val();
    console.log(search);
  }

});

module.exports.id = 'header';
