var BaseView = require('./base');

module.exports = BaseView.extend({
  className: 'header',
  events: {
    'submit form': 'submitForm'
  },

  postRender: function() {
    var engine = new Bloodhound({
      minLength: 4,
      datumTokenizer: function(datum) {
        console.log('datum', dataum);
        return datum;
      },
      queryTokenizer: function(query) { return query; },
      remote: {
        url: 'https://www.goodreads.com/search.xml?q=%QUERY&key=rlBQOpaINpECDEMKhDEx9g',
        ajax: { crossDomain: true }
      }
    });

    engine.initialize();
    this.$('input[name="search"]').typeahead(null, {
      source: engine.ttAdapter()
    });
  },

  submitForm: function(e) {
    e.preventDefault();
    var search = this.$('input[name="search"]').val();
    console.log(search);
  }

});

module.exports.id = 'header';
