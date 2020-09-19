# vue-remove-whitespace

> A reusable remove whitespace directive for reusable [Vue.js](https://github.com/vuejs/vue) components

## Overview

英語では通常、単語は空白文字で区切られます。一方、中国語、日本語、タイ語などの言語では通常、単語間の区切り文字は一切使用されません。

spanやa、またそれらを内包したVue コンポーネントなどのinline要素内での改行は、意図しないWhitespaceを作ってしまいます。

`vue-remove-whitespace` はそれらの課題を解決します。

## Requirements

- vue: ^2.0.0

## API

### `directives`

``` js
import { removeWhitespace } from 'vue-remove-whitespace';

export default {
  directives: { removeWhitespace: removeWhitespace },
  template: `
    <p v-remove-whitespace>
      お問い合わせは
      <a href="#">こちらから</a>
      お願いします
    </p>
  `,
};
```

### `mixin`

``` js
import { mixin as removeWhitespaceMixin } from 'vue-remove-whitespace';

export default {
  mixins: [ removeWhitespaceMixin ],
  template: `
    <p v-remove-whitespace>
      お問い合わせは
      <a href="#">こちらから</a>
      お願いします
    </p>
  `,
};
```

## Notes

forked configuration [vue-focus](https://www.npmjs.com/package/vue-focus)

## License

[MIT](https://opensource.org/licenses/MIT)
