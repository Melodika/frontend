<template>
  <transition name="fade" mode="out-in">
    <div :key="section.slug" v-html="section.content" />
  </transition>
</template>

<script>
export default {
  data() {
    return {
      section: {},
    };
  },
  async asyncData({ params, store, error }) {
    const { slug, section } = params;
    const data = store.getters['raids/section'](slug, section);
    if (!data) {
      error({ statusCode: 404, message: 'Раздел рейда не найден.' });
    }

    return { section: data };
  },
};
</script>
