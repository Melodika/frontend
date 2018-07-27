import { mount, createLocalVue } from '@vue/test-utils';
import VueWait from 'vue-wait';
import AppLoadingBar from '../AppLoadingBar.vue';

describe('AppLoadingBar', () => {
  const createWrapper = (options) => {
    const localVue = createLocalVue();
    localVue.use(VueWait);

    return mount(AppLoadingBar, {
      wait: new VueWait(),
      localVue,
      ...options,
    })
  };

  it('work', () => {
    const wrapper = createWrapper();
    const loader = 'test';

    expect(wrapper.isVisible()).toBeFalsy();
    wrapper.vm.$wait.start(loader);
    expect(wrapper.isVisible()).toBeTruthy();
    wrapper.vm.$wait.end(loader);
    expect(wrapper.isVisible()).toBeFalsy();
  });
});
