<template>
  <footer class="youplay-footer youplay-footer-parallax">
    <div v-jarallax="0.4" class="image">
      <img src="@/assets/images/footer-bg.jpg" srcset="@/assets/images/footer-bg@2x.jpg 2x" class="jarallax-img" alt="">
    </div>
    <div class="wrapper">
      <div class="social">
        <div class="container">
          <div class="social-icons">
            <div class="social-icon">
              <a :href="vkontakte">
                <font-awesome-icon :icon="['fab', 'vk']" class="social-icons__icon" />
                <span class="social-icons__title">ВКонтакте</span>
              </a>
            </div>
            <div class="social-icon">
              <a :href="warcraftlogs">
                <span class="social-icons__icon social-icons__icon-warcraftlogs" />
                <span class="social-icons__title">Warcraftlogs</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <div class="container">
          <p>2018 © Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk } from '@fortawesome/free-brands-svg-icons';

library.add(faVk);

export default {
  computed: {
    vkontakte() {
      return this.$store.state.vkontakte.link;
    },
    warcraftlogs() {
      return this.$store.state.warcraftlogs.link;
    },
  },
};
</script>
