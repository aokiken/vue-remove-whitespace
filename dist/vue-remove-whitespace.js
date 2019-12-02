(function (exports) { 'use strict';

  const version = '1.1.0'

  const removeWhitespace = {
    inserted(el) {
      el.innerHTML = el.innerHTML.replace(/\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g, match => match.trim())
    },
  }

  const mixin = {
    directives: {
      removeWhitespace,
    },
  }

  exports.version = version;
  exports.removeWhitespace = removeWhitespace;
  exports.mixin = mixin;

})((this.VueRemoveWhitespace = {}));