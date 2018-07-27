import api from '@/api/raids';
import { LOADER_MODULE_NAME, LOADER_RAIDS } from '@/loader/types';

export default {
  state: {
    raids: [],
  },

  getters: {
    raids: state => state.raids,
    raid: state => slug => state.raids.find(el => el.slug === slug),
    section: state => (slug, section) => {
      const raid = state.raids.find(el => el.slug === slug);
      if (section) {
        return raid.sections.find(el => el.slug === section);
      }
      return raid.sections.find(el => el.isDefault);
    },
  },

  mutations: {
    raids(state, data) {
      state.raids = data;
    },
  },

  actions: {
    async loading({ commit, dispatch }) {
      try {
        dispatch(`${LOADER_MODULE_NAME}/start`, LOADER_RAIDS, { root: true });
        const data = await api.fetch();
        commit('raids', data);
        dispatch(`${LOADER_MODULE_NAME}/end`, LOADER_RAIDS, { root: true });
      } catch (e) {
        dispatch(`${LOADER_MODULE_NAME}/end`, LOADER_RAIDS, { root: true });
      }
    },
  },

  namespaced: true,
};
