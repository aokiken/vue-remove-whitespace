import {removeWhitespace} from '../lib/index'

export default {
  directives: {removeWhitespace},
  methods: {
    reverseTextData() {
      this.textData = this.textData.split('').reverse().join('')
    },
  },
  data: function () {
    return {
      textData: 'JavaScript',
    }
  },
  template: `
      <div v-remove-whitespace>
      <span>JavaScript</span>
      <span data-test="item0" @click="reverseTextData">{{ textData }}</span>
      </div>
    `,
}
