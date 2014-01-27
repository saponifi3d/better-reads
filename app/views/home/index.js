var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',
  
  postRender: function() {
    this.$('.caoursel').carousel();
  }

});

module.exports.id = 'home/index';
