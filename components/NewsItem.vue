<template>
  <article class="news-one">
    <div class="row vertical-gutter">
      <div class="col-md-4">
        <router-link :to="getUrl()" class="news-one__image angled-img">
          <div class="img">
            <img :src="item.image" alt="">
          </div>
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="d-flex align-items-center justify-content-between">
          <h3 class="news-one__title h2 m-0">
            <router-link :to="getUrl()">{{ item.title }}</router-link>
          </h3>
          <time :datetime="item.createdAt" class="news-one__date date">
            <font-awesome-icon icon="calendar-alt" />
            {{ item.createdAt | moment('D MMMM, YYYY г.') }}
          </time>
        </div>
        <nl2br :text="item.description" tag="div" class="news-one__description description" />
        <router-link :to="getUrl()" class="news-one__more btn read-more">Читать далее</router-link>
      </div>
    </div>
  </article>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Nl2br from '@/components/Nl2br.vue';

library.add(faCalendarAlt);

export default {
  components: {
    Nl2br,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getUrl() {
      return `/news/${this.item.slug}`;
    },
  },
};
</script>
