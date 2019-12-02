import { mount } from '@vue/test-utils'
import InlineElementWithLineBreak from './InlineElementWithLineBreak'

describe('InlineElementWithLineBreak', () => {
  const wrapper = mount(InlineElementWithLineBreak)
  it('renders the correct markup', () => {
    expect(wrapper.html()).toBe('<div><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>')
  })
})
