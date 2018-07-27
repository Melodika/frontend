<template>
  <transition name="fade" mode="out-in">
    <div v-if="status" key="spinner">
      Loading...
    </div>

    <div v-else key="content">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    when: {
      type: Boolean,
      default: null,
    },
    loader: {
      type: String,
      default: '',
    },
  },
  computed: {
    status() {
      if (this.loader) {
        return this.$wait.is(this.loader);
      }
      if (this.when !== null) {
        return this.when;
      }

      return this.$wait.any;
    },
  },
};
</script>
