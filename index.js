import Vue from 'vue';

export var version = '0.1.1';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueRemoveWhitespace ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

export var removeWhitespace = {
  inserted: function(el) {
    el.innerHTML = el.innerHTML.replace(/\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g, function (match) {
      return match.trim();
    });
  },
};

export var mixin = {
  directives: {
    removeWhitespace: removeWhitespace,
  },
};
