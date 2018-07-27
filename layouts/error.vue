<template>
  <div class="youplay-404">
    <section class="youplay-hero hero-top youplay-hero-parallax">
      <div v-jarallax="0.4" class="image">
        <img src="@/assets/images/error-bg.jpg" srcset="@/assets/images/error-bg@2x.jpg 2x" class="jarallax-img" alt="">
      </div>

      <div class="info">
        <div class="container">
          <div class="text-center">
            <h1 class="h1">404</h1>
            <h3>Страница не найдена ;(</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('fullPage');
  },
  destroyed() {
    this.$store.commit('shrinkPage');
  },
};
</script>
