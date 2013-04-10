
/**
 * Module dependencies.
 */

var humanize = require('humanize-component');
var parse = require('url').parse;

/**
 * Return a humanized title from the given `url`.
 *
 * @param {String} url
 * @return {String}
 * @api public
 */

module.exports = function(url){
  url = parse(url);
  var path = url.pathname;
  if (path && '/' != path) return humanize(segment(path.split('/')));
  return humanize(url.hostname.replace('www.', ''));
};

/**
 * Selects the longest item in the array.
 *
 * @param {Array} array of url segments
 * @api private
 */

function segment(arr){
  var ret = '';

  // select the longest segment
  arr.forEach(function(str){
    if (str.length > ret.length) ret = str;
  });

  // replace .html,.php etc
  ret = ret.replace(/\.\w+$/, '');

  return ret;
}
