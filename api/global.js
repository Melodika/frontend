import Vue from 'vue';

const GLOBAL_ENDPOINT = '/data';

export default {
  async fetch() {
    return (await Vue.axios.get(GLOBAL_ENDPOINT)).data;
  },
};
