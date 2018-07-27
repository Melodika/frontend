import Vue from 'vue';
import { jarallax } from 'jarallax';

Vue.directive('jarallax', {
  inserted(el, binding, vnode) {
    const params = typeof binding.value === 'object' ? binding.value : { speed: binding.value };

    vnode.context.$nextTick(() => {
      jarallax(el, Object.assign({}, params, {
        onScroll: (calculations) => { el.dispatchEvent(new CustomEvent('jarallax:scroll', { detail: calculations })); },
        onInit: () => { el.dispatchEvent(new Event('jarallax:init')); },
        onDestroy: () => { el.dispatchEvent(new Event('jarallax:destroy')); },
        onCoverImage: () => { el.dispatchEvent(new Event('jarallax:coverImage')); },
      }));
    });
  },
  unbind(el) {
    jarallax(el, 'removeFromParallaxList');
  },
});
