import { mount } from '@vue/test-utils'
import InlineElementWithLineBreak from './InlineElementWithLineBreak'
import InlineElementWithLineBreakAndBindEvent from './InlineElementWithLineBreakAndBindEvent'

describe('InlineElementWithLineBreak', () => {
  const wrapper = mount(InlineElementWithLineBreak)
  it('renders the correct markup', () => {
    expect(wrapper.html()).toBe('<div><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>')
  })
  it('Cant bind event after removing whitespace', done => {
    const wrapper = mount(InlineElementWithLineBreakAndBindEvent)
    wrapper.find('[data-test="item0"]').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toBe('<div><span>JavaScript</span><span data-test=\"item0\">tpircSavaJ</span></div>')
      done()
    })
  })
})
