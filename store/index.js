import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import api from '@/api/global';
import { LOADER_MODULE_NAME, LOADER_GLOBAL } from '@/loader/types';
import raids from './modules/raids';

const createStore = () => new Vuex.Store({
  modules: {
    raids,
  },

  state: {
    loaded: false, // Глобальный флаг о готовности приложения
    fullPage: false,
    vkontakte: {
      link: '',
    },
    warcraftlogs: {
      link: '',
    },
    invite: {
      link: '',
    },
  },

  mutations: {
    vkontakte(state, data) {
      state.vkontakte.link = data.link;
    },
    warcraftlogs(state, data) {
      state.warcraftlogs.link = data.link;
    },
    invite(state, data) {
      state.invite.link = data.link;
    },
    loaded(state) {
      state.loaded = true;
    },
    fullPage(state) {
      state.fullPage = true;
    },
    shrinkPage(state) {
      state.fullPage = false;
    },
  },

  actions: {
    async nuxtServerInit({ commit, dispatch }) {
      dispatch(`${LOADER_MODULE_NAME}/start`, LOADER_GLOBAL, { root: true });
      const data = await api.fetch();
      commit('vkontakte', { link: data.vkontakte });
      commit('warcraftlogs', { link: data.warcraftlogs });
      commit('invite', { link: data.invite });
      commit('loaded');
      dispatch(`${LOADER_MODULE_NAME}/end`, LOADER_GLOBAL, { root: true });
    },
  },

  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  strict: process.env.NODE_ENV !== 'production',
});

export default createStore;
