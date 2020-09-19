export var version = '1.1.3'

export var removeWhitespace = {
  inserted(el) {
    el.innerHTML = el.innerHTML.replace(/\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g, match => match.trim())
  },
}

export var mixin = {
  directives: {
    removeWhitespace,
  },
}
