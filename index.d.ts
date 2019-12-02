import { DirectiveOptions } from 'vue'

export const version: string
export const removeWhitespace: DirectiveOptions
export const mixin: {
    directives: {
        [key: string]: DirectiveOptions,
    },
}
