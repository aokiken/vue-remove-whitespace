export const version = '1.1.0'

export const removeWhitespace = {
  inserted(el) {
    el.innerHTML = el.innerHTML.replace(/\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g, match => match.trim())
  },
}

export const mixin = {
  directives: {
    removeWhitespace,
  },
}
