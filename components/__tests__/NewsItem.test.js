import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/ru';
import NewsItem from '../NewsItem.vue';

describe('NewsItem', () => {
  const createWrapper = (options) => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(VueMoment, { moment });
    const router = new VueRouter({ mode: 'history' });

    return mount(NewsItem, {
      localVue,
      router,
      ...options,
    })
  };

  it('has correct markup', () => {
    const wrapper = createWrapper({
      propsData: {
        item: {
          id: 1,
          slug: 'test-slug',
          title: 'test title',
          description: 'test\ndescription',
          image: '/test/test.jpg',
          createdAt: '2018-03-03T07:15:27.000Z',
        },
      },
    });

    expect(wrapper.classes()).toContain('news-one');
    expect(wrapper.find('.news-one__image').attributes().href).toBe('/news/test-slug');
    expect(wrapper.find('.news-one__image img').attributes().src).toBe('/test/test.jpg');
    expect(wrapper.find('.news-one__title').text()).toBe('test title');
    expect(wrapper.find('.news-one__title a').attributes().href).toBe('/news/test-slug');
    expect(wrapper.find('.news-one__date').is('time')).toBeTruthy();
    expect(wrapper.find('.news-one__date').attributes().datetime).toBe('2018-03-03T07:15:27.000Z');
    expect(wrapper.find('.news-one__date').text()).toBe('3 марта, 2018 г.');
    expect(wrapper.find('.news-one__description').text()).toBe('testdescription');
    expect(wrapper.find('.news-one__more').attributes().href).toBe('/news/test-slug');
  });
});
