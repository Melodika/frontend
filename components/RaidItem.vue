<template>
  <div class="youplay-user">
    <router-link v-if="withLinks" :to="url" class="angled-img">
      <div class="img">
        <img :src="item.image" :srcset="`${item.image2x} 2x`" alt="">
      </div>
    </router-link>
    <div v-else class="angled-img">
      <div class="img">
        <img :src="item.image" :srcset="`${item.image2x} 2x`" alt="">
      </div>
    </div>
    <div :class="{ 'user-data': true, 'user-data_light': light, 'user-data_full': full }">
      <h2 class="youplay-user__title">
        <router-link v-if="withLinks" :to="url" class="youplay-user__link">{{ item.name }}</router-link>
        <template v-else>{{ item.name }}</template>
      </h2>
      <span v-if="item.subtitle" class="highlight">{{ item.subtitle }}</span>
      <p v-if="item.shortDescription" class="text-muted mt-10">{{ item.shortDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
    withLinks: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    url() {
      return `/raids/${this.item.slug}`;
    },
  },
};
</script>
