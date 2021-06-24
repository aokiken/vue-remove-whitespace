'use strict';

var version = '2.0.0'

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

var removeWhitespace = {
  inserted(el) {
    trimText(el.childNodes)
  }
}

var mixin = {
  directives: {
    removeWhitespace,
  },
}

exports.version = version;
exports.removeWhitespace = removeWhitespace;
exports.mixin = mixin;
