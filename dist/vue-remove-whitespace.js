(function (exports) { 'use strict';

  var version = '1.1.3'

  var removeWhitespace = {
    inserted(el) {
      el.innerHTML = el.innerHTML.replace(/\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g, match => match.trim())
    },
  }

  var mixin = {
    directives: {
      removeWhitespace,
    },
  }

  exports.version = version;
  exports.removeWhitespace = removeWhitespace;
  exports.mixin = mixin;

})((this.VueRemoveWhitespace = {}));