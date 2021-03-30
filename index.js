export var version = '2.0.0'

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
