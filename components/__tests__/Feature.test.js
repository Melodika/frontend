import { mount, createLocalVue } from '@vue/test-utils';
import Feature from '../Feature.vue';

describe('Feature', () => {
  const createWrapper = (options) => {
    const localVue = createLocalVue();

    return mount(Feature, {
      localVue,
      stubs: ['font-awesome-icon'],
      ...options,
    })
  };

  it('has correct default markup', () => {
    const wrapper = createWrapper({
      propsData: {
        icon: 'test',
        title: 'test',
      },
    });

    expect(wrapper.classes()).toContain('feature');
    expect(wrapper.find('.feature__icon')).toBeTruthy();
    expect(wrapper.find('.feature__title')).toBeTruthy();
    expect(wrapper.find('.feature__text')).toBeTruthy();
  });

  it('used my props', () => {
    const wrapper = createWrapper({
      propsData: {
        icon: 'test',
        title: 'test',
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.find('.feature__icon')).toBeTruthy();
    expect(wrapper.find('.feature__title').text()).toBe('test');
    expect(wrapper.find('.feature__text').text()).toBe('test');
  });

  it('has correct external behaviour', () => {
    const wrapper = createWrapper({
      propsData: {
        icon: 'test',
        title: 'test',
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.classes()).toContain('angled-bg');
    expect(wrapper.classes()).not.toContain('feature_fullheight');
    wrapper.setProps({
      fullHeight: true,
      angled: false,
    });
    expect(wrapper.classes()).not.toContain('angled-bg');
    expect(wrapper.classes()).toContain('feature_fullheight');
  });
});
