import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import RaidItem from '../RaidItem.vue';

describe('RaidItem', () => {
  const createWrapper = (options) => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ mode: 'history' });

    return mount(RaidItem, {
      localVue,
      router,
      ...options,
    })
  };

  it('has correct default markup', () => {
    const wrapper = createWrapper({
      propsData: {
        item: {
          image: 'test',
          image2x: 'test',
          name: 'test',
        },
      },
    });

    expect(wrapper.find('.user-data').classes()).not.toContain('user-data_light');
    expect(wrapper.findAll('a')).toHaveLength(0);
  });

  it('create links', () => {
    const wrapper = createWrapper({
      propsData: {
        item: {
          image: 'test',
          image2x: 'test',
          name: 'test',
          slug: 'test',
        },
        withLinks: true,
      },
    });

    expect(wrapper.findAll('a').length).toBeGreaterThan(0);
  });

  it('can be light', () => {
    const wrapper = createWrapper({
      propsData: {
        item: {
          image: 'test',
          image2x: 'test',
          name: 'test',
        },
      },
    });

    expect(wrapper.find('.user-data_light').exists()).toBeFalsy();
    wrapper.setProps({ light: true });
    expect(wrapper.find('.user-data_light').exists()).toBeTruthy();
  });

  it('can be full', () => {
    const wrapper = createWrapper({
      propsData: {
        item: {
          image: 'test',
          image2x: 'test',
          name: 'test',
        },
      },
    });

    expect(wrapper.find('.user-data_full').exists()).toBeFalsy();
    wrapper.setProps({ full: true });
    expect(wrapper.find('.user-data_full').exists()).toBeTruthy();
  });
});
