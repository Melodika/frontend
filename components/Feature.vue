<template>
  <div :class="{ feature: true, feature_fullheight: fullHeight, 'angled-bg': angled }">
    <font-awesome-icon :icon="icon" class="feature__icon" />
    <h3 class="feature__title">{{ title }}</h3>
    <div class="feature__text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    angled: {
      type: Boolean,
      default: true,
    },
    fullHeight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
