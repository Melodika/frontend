import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios.create({ baseURL: process.env.AXIOS_BASE_URL }));
