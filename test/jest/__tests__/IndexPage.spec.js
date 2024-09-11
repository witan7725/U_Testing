import IndexPage from 'src/pages/IndexPage.vue' //src\pages\IndexPage.vue
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {

});

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ title', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วิวัฒนาการของโลกสมัยใหม่')
  })

  it('ตรวจสอบตัวแปร title', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: 'ฉันรักวิว'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรักวิว')
  })
});



test('ทดสอบว่ามีฟอร์ม From', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่ามี Input', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามี button', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('button').exists()).toBe(true)
})
