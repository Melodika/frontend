<template>
  <div>
    <app-loading-bar />
    <app-header />

    <div :class="{ 'content-wrap': true, 'full': fullPage }">
      <nuxt />

      <app-footer v-if="!fullPage" />
    </div>
  </div>
</template>

<script>
import AppLoadingBar from '@/components/AppLoadingBar.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppLoadingBar,
    AppHeader,
    AppFooter,
  },
  computed: {
    fullPage() {
      return this.$store.state.fullPage;
    },
  },
};
</script>
