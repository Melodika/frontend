<template>
  <b-navbar :class="{ 'navbar-youplay': true, 'youplay-navbar-collapsed': !collapsed, 'navbar-small': scrolled }" toggleable="md" type="dark" fixed="top">
    <div class="container">
      <div class="navbar-header">
        <b-navbar-brand to="/">
          <img src="@/assets/images/logo-light.png" srcset="@/assets/images/logo-light@2x.png 2x" alt="Мелодика">
        </b-navbar-brand>

        <button class="navbar-toggler" type="button" @click="collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </button>
      </div>

      <div :class="{ 'navbar-collapse': true, collapse: collapsed }">
        <b-navbar-nav>
          <b-nav-item-dropdown text="Гильдия" class="dropdown-hover">
            <ul>
              <li>
                <b-dropdown-item to="/rules">Устав</b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item :href="invite">Вступить</b-dropdown-item>
              </li>
            </ul>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Рейды" class="dropdown-hover">
            <ul>
              <li v-for="raid in raids" :key="raid.slug">
                <b-dropdown-item :to="`/raids/${raid.slug}`">{{ raid.name }}</b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item to="/raid-leaders">Рейд-лидерам</b-dropdown-item>
              </li>
            </ul>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
      scrolled: false,
    };
  },
  computed: {
    invite() {
      return this.$store.state.invite.link;
    },
    raids() {
      return this.$store.getters['raids/raids'];
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    collapse() {
      this.collapsed = !this.collapsed;
    },
    checkScroll() {
      this.scrolled = document.querySelector('html').scrollTop !== 0 || document.querySelector('body').scrollTop !== 0;
    },
  },
};
</script>
