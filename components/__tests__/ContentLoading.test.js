import { mount, createLocalVue } from '@vue/test-utils';
import VueWait from 'vue-wait';
import ContentLoading from '../ContentLoading.vue';

describe('ContentLoading', () => {
  const createWrapper = (options) => {
    const localVue = createLocalVue();
    localVue.use(VueWait);

    return mount(ContentLoading, {
      wait: new VueWait(),
      localVue,
      ...options,
    })
  };

  it('work with when', () => {
    const wrapper = createWrapper({
      propsData: {
        when: true,
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.text()).not.toBe('test');
    wrapper.setProps({ when: false });
    expect(wrapper.text()).toBe('test');
  });

  it('work with loader', () => {
    const loader = 'test loader';
    const wrapper = createWrapper({
      propsData: {
        loader: loader,
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.text()).toBe('test');
    wrapper.vm.$wait.start(loader);
    expect(wrapper.text()).not.toBe('test');
    wrapper.vm.$wait.end(loader);
    expect(wrapper.text()).toBe('test');
  });

  it('work without all', () => {
    const loader = 'test 123';
    const wrapper = createWrapper({
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.text()).toBe('test');
    wrapper.vm.$wait.start(loader);
    expect(wrapper.text()).not.toBe('test');
    wrapper.vm.$wait.end(loader);
    expect(wrapper.text()).toBe('test');
  });
});
