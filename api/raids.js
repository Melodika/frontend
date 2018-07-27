import Vue from 'vue';

const RAIDS_ENDPOINT = '/raids';

export default {
  async fetch() {
    return (await Vue.axios.get(RAIDS_ENDPOINT)).data;
  },
};
