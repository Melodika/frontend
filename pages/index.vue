<template>
  <div>
    <section class="youplay-hero hero-top youplay-hero-parallax">
      <div v-jarallax="0.4" class="image">
        <img src="@/assets/images/landing-bg-top.jpg" srcset="@/assets/images/landing-bg-top@2x.jpg 2x" class="jarallax-img" alt="">
      </div>

      <div class="info">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h1 class="h1">Гильдия МЕЛОДИКА</h1>
              <p class="lead">Если вы хотите присоединиться - мы будем рады видеть вас в наших рядах. Не важно: играете вы второй день или год, увлекаетесь PvP или PvE контентом - у нас вы найдёте сообщество по душе.</p>
              <br>
              <a :href="invite" target="_blank" class="btn btn-md active">
                <font-awesome-icon icon="thumbs-up" />
                Вступить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <article>
        <h2 class="h2 text-center">PvE-направление</h2>
        <div class="row">
          <div class="col-md-6">
            <h3>Приём</h3>
            <ul>
              <li>Ознакомьтесь с информацией по рейду на соответствующей странице сайта</li>
              <li>Для получения актуальных требований к экипировке обращайтесь к РЛу</li>
              <li>Мы без проблем рассматриваем людей со сменным или вахтовым рабочим графиком</li>
              <li>В рейд принимается в первую очередь игрок, а не персонаж. Самое главное - ваши личные качества, позволяющие добиться успеха в игре и гильдии</li>
            </ul>
          </div>
          <div class="col-md-6">
            <content-loading :loader="loaderRaids">
              <raid-item v-for="raid in raids" :key="raid.slug" :item="raid" with-links light full />
            </content-loading>
          </div>
        </div>
      </article>

      <article class="mb-60">
        <h2 class="h2 text-center">Новичкам</h2>
        <p class="text-center">Наша гильдия не зацикливается на каком-то одном аспекте игры. Мы уделяем время PvE и PvP аспектам игры, проводим забеги по достижениям и подземелиям.</p>
        <p class="text-center">Мы принимаем любых игроков, которые разделют наши взгляды и готовы проводить время с гильдией.</p>
        <div class="row">
          <div class="col-md-6">
            <h3>Кто нам нужен?</h3>
            <ul>
              <li>Желающие развиваться. Даже если вы играете первый день и мало что понимаете в игре, но обладаете желанием расти и развиваться - мы с радостью окажем вам помощь и возьмём в свои ряды</li>
              <li>Отзывчивые. Если вы готовы помогать согильдийцам, гильдия в долгу не останется</li>
              <li>Общительные. Если зелёный чат вам не чужд, навещать голосовой канал это норма и вы можете назвать себя экстравертом - гильдия будет рада вашему присутствию</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>Что мы предлагаем?</h3>
            <ul>
              <li>Обучение и помощь по игре. Наши ветераны помогут с освоением особенностей классов, настройкой аддонов и других аспектов игры. Одни вы не останетесь</li>
              <li>Регулярные рейды и другие события. Новичкам обязательно найдётся место, это не обязательно хардкорные мероприятия, куда берут только продвинутых игроков</li>
              <li>Активное сообщество. Здесь каждый занят интересным аспектом игры, вы обязательно найдёте себе единомышленников</li>
            </ul>
          </div>
        </div>
        <a :href="invite" target="_blank" class="btn btn-primary">Вступить</a>
        <p class="text-muted">Если вы уже находитесь в нашей гильдии, мы всё равно просим вас заполнить анкету по ссылке выше. Таким образом, мы будем лучше понимать что вам интересно и какие мероприятия планировать.</p>
      </article>
    </section>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Feature from '@/components/Feature.vue';
import RaidItem from '@/components/RaidItem.vue';
import { LOADER_RAIDS } from '@/loader/types';

library.add(faThumbsUp);

export default {
  components: {
    Feature,
    RaidItem,
  },
  data() {
    return {
      loaderRaids: LOADER_RAIDS,
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
  async created() {
    await this.$store.dispatch('raids/loading');
  },
};
</script>
