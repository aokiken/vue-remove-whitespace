export var version = '2.0.0'

function isText(node) {
  return node.nodeType === Node.TEXT_NODE
}

function trimText(node) {
  Array.from(node).forEach(node => {
    if (isText(node)) {
      node.textContent = node.textContent.trim()
      return
    }
    trimText(node.childNodes)
  })
}

export var removeWhitespace = {
  inserted(el) {
    trimText(el.childNodes)
  }
}

export var mixin = {
  directives: {
    removeWhitespace,
  },
}
