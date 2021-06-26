export const version = '2.1.0' as const

function isText(node: ChildNode) {
    return node.nodeType === Node.TEXT_NODE
}

function trimText(node: NodeListOf<ChildNode>) {
    Array.from(node).forEach((node) => {
        if (isText(node) && node.textContent) {
            node.textContent = node.textContent.trim()
            return
        }
        trimText(node.childNodes)
    })
}

export const removeWhitespace = {
    inserted(el: HTMLElement) {
        trimText(el.childNodes)
    },
    componentUpdated(el: HTMLElement) {
        trimText(el.childNodes)
    },
}

export const mixin = {
    directives: {
        removeWhitespace,
    },
}
