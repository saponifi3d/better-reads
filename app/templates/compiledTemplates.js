module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>Wecome to GitHub Browser!</h1>\n<p>This is a little app that demonstrates how to use Rendr by consuming GitHub's public Api.</p>\n\n<p>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.copyright || depth0.copyright),stack1 ? stack1.call(depth0, "2013", options) : helperMissing.call(depth0, "copyright", "2013", options)))
    + "</p>\n";
  return buffer;
  });

return templates;

};