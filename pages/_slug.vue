<template>
  <article>
    <div class="youplay-hero hero-top xsmall">
      <div v-jarallax="0.4" class="image">
        <img src="@/assets/images/pages-bg-top.jpg" srcset="@/assets/images/pages-bg-top@2x.jpg 2x" class="jarallax-img" alt="">
      </div>

      <div class="info">
        <div class="container">
          <h1 class="h1">{{ page.title }}</h1>
        </div>
      </div>
    </div>
    <div class="container youplay-content">
      <content-loading :loader="loader">
        <div v-html="page.text" />
      </content-loading>
    </div>
  </article>
</template>

<script>
import api from '@/api/pages';

const LOADER_PAGE = 'page loading';

export default {
  metaInfo() {
    return {
      title: this.page.title,
    };
  },
  data() {
    return {
      page: {
        title: '',
        text: '',
      },
      loader: LOADER_PAGE,
    };
  },
  async asyncData({ app, params, error }) {
    const { slug } = params;
    let page;
    try {
      app.wait.start(LOADER_PAGE);
      page = await api.fetch(slug);
      app.wait.end(LOADER_PAGE);
    } catch (e) {
      app.wait.end(LOADER_PAGE);
      error({ statusCode: 404, message: 'Страница не найдена.' });
    }

    return { page };
  },
};
</script>
