import Vue from 'vue';

const PAGE_ENDPOINT = '/pages/page';

export default {
  async fetch(slug) {
    return (await Vue.axios.get(PAGE_ENDPOINT, { params: { slug } })).data;
  },
};
