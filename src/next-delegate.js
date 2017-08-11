(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.delegate = function (inSource, inTarget, inArray) {
    inArray.forEach(function (name) {
      inSource[name] = inTarget[name].bind(inTarget);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delegate;
  }

}());
