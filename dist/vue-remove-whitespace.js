(function (exports,Vue) { 'use strict';

  Vue = 'default' in Vue ? Vue['default'] : Vue;

  var version = '1.0.0';

  var compatible = (/^2\./).test(Vue.version);
  if (!compatible) {
    Vue.util.warn('VueRemoveWhitespace ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
  }

  var removeWhitespace = {
    inserted: function(el) {
      el.innerHTML = el.innerHTML.replace(/\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g, function (match) {
        return match.trim();
      });
    },
  };

  var mixin = {
    directives: {
      removeWhitespace: removeWhitespace,
    },
  };

  exports.version = version;
  exports.removeWhitespace = removeWhitespace;
  exports.mixin = mixin;

})((this.VueRemoveWhitespace = {}),Vue);