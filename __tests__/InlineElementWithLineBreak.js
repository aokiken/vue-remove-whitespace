import { removeWhitespace } from '../index'

export default {
  directives: { removeWhitespace },
  template: `
      <div v-remove-whitespace>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
      </div>
  `,
}
