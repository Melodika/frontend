<template>
  <article>
    <div class="youplay-hero hero-top small">
      <div v-jarallax="0.4" class="image">
        <img src="@/assets/images/leaders-bg-top.jpg" srcset="@/assets/images/leaders-bg-top@2x.jpg 2x" class="jarallax-img" alt="">
      </div>

      <div class="info">
        <div class="container">
          <raid-item v-if="raid" :item="raid" />
        </div>
      </div>
      <div class="youplay-user-navigation">
        <div class="container">
          <ul>
            <no-ssr>
              <flickity ref="navigation" :options="navigationOptions">
                <router-link v-for="section in raid.sections" :key="section.slug" :to="getSectionUrl(section)" tag="li" active-class="active" exact>
                  <a>{{ section.name }}</a>
                </router-link>
              </flickity>
            </no-ssr>
          </ul>
        </div>
      </div>
    </div>
    <div class="container youplay-content">
      <content-loading :loader="loader">
        <nuxt-child />
      </content-loading>
    </div>
  </article>
</template>

<script>
import RaidItem from '@/components/RaidItem.vue';
import { LOADER_RAIDS } from '@/loader/types';

export default {
  components: {
    RaidItem,
  },
  data() {
    return {
      loader: LOADER_RAIDS,
      raid: {},
      navigationOptions: {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        friction: 0.6,
        freeScroll: true,
      },
    };
  },
  async asyncData({ params, store, error }) {
    const { slug } = params;
    const raid = store.getters['raids/raid'](slug);
    if (!raid) {
      error({ statusCode: 404, message: 'Рейд не найден.' });
    }

    return { raid };
  },
  async fetch({ store }) {
    await store.dispatch('raids/loading');
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.navigation.rerender();
    });
  },
  methods: {
    getSectionUrl(section) {
      if (section.isDefault) {
        return `/raids/${this.raid.slug}`;
      }

      return `/raids/${this.raid.slug}/${section.slug}`;
    },
  },
};
</script>
