import { mount, createLocalVue } from '@vue/test-utils';
import Nl2br from '../Nl2br.vue';

describe('Nl2br', () => {
  const createWrapper = (options) => {
    const localVue = createLocalVue();

    return mount(Nl2br, {
      localVue,
      ...options,
    })
  };

  it('replace to br', () => {
    const wrapper = createWrapper({
      propsData: {
        tag: 'div',
        text: 'test\nstring',
      },
    });

    expect(wrapper.html()).toBe('<div>test<br>string</div>');
  });
});
