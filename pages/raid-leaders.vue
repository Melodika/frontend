<template>
  <article>
    <div class="youplay-hero hero-top xsmall">
      <div v-jarallax="0.4" class="image">
        <img src="@/assets/images/leaders-bg-top.jpg" srcset="@/assets/images/leaders-bg-top@2x.jpg 2x" class="jarallax-img" alt="">
      </div>

      <div class="info">
        <div class="container">
          <h1 class="h1">Рейд-лидерам и организаторам</h1>
        </div>
      </div>
    </div>
    <div class="container youplay-content">
      <p>Наша гильдия поощряет инициативных игроков - мы предпочитаем командный стиль руководства, и у наших РЛов и ГМа нет диктатуры и жажды единоличной власти.</p>
      <p>Чем больше в нашем коллективе будет тех, кто желает делать что-то кроме прожимания ротации, тем мы становимся сильнее.</p>

      <h2>Почему стоит присоединиться к нам, а не создавать свою гильдию?</h2>
      <features>
        <div class="row">
          <div class="col-md-4">
            <feature icon="comments" title="Консультации" full-height>
              Вы не будете брошены на произвол судьбы со своими обязанностями: вам могут подсказать, поделиться опытом, а также помочь
            </feature>
          </div>
          <div class="col-md-4">
            <feature icon="users" title="Командная работа" full-height>
              В нашей гильдии есть другие РЛы, благодаря этому вас будет кому подменить на время отпуска или болезни
            </feature>
          </div>
          <div class="col-md-4">
            <feature icon="dove" title="Свобода действий" full-height>
              Мы не навязяваем строгие правила: на своих мероприятиях вы сами определяете правила поведения и кого с собой брать
            </feature>
          </div>
        </div>
      </features>

      <h2>Кого мы ищем?</h2>
      <p>Мы принимаем организаторов на самые разные должности:</p>
      <ul>
        <li>РЛы статиков</li>
        <li>РЛы рейдов/PvP-направления</li>
        <li>РЛы ачив-ранов</li>
        <li>Рекрутеры</li>
      </ul>
      <p>Нам важен каждый, кто готов помогать гильдии. И это вовсе не обязательно означает создание нового статика.</p>

      <h2>Что мы ожидаем от РЛов?</h2>
      <dl>
        <dt>Самостоятельность</dt>
        <dd>У вас должны быть организаторские способности и желание выполнять свои обязанности. Мы готовы помочь, но не будем делать всю работу за вас. РЛы, которые валят всю работу на гильдию и не хотят ничего делать, кроме как поорать в микрофон, нам не нужны.</dd>
        <dt>Навыки рекрутинга и добора</dt>
        <dd>Проблема набора всегда актуальна. Мы помогаем с этим, но будьте готовы что и вам самим придётся в этом участвовать. Не всегда всё происходит благополучно, и в таких ситуациях готовьтесь справляться самому: делегировать обязанности по рекрутингу своим игрокам, обучать их этому, либо же вместе решать проблему.</dd>
        <dt>Интеграция в сообщество</dt>
        <dd>Мы против формирования внутри гильдии отдельной гильдии по интересам. Если наши игроки используют дискорд, значит ваши игроки тоже будут им пользоваться. Если наши РЛы используют google docs, значит вам тоже это предстоит. Мы открыты к предложениям о том, как сделать что-либо в организации удобнее, но это решается совместно, и если все не готовы, значит придётся подстраиваться под большинство.</dd>
        <dt>Принятие наших принципов</dt>
        <dd>У нашей гильдии уже есть устоявшаяся политика и правила. Если они вам в корне не подходят, то мы не сможем работать вместе. Например, если вы не терпите новичков, вам здесь не понравится. На своих событиях вы вольны сами решать что можно, а что нельзя, но изменить всё сообщество под ваши нужды невозможно.</dd>
        <dt>Готовность работать в команде</dt>
        <dd>Мы не жадные до власти, мы не упёртые и готовы решать вопросы совместно, и мы работаем все вместе на общее благо. Этого же мы хотим от новых РЛов. Если вы видите себя только в роли единоличного владельца куска гильдии или статика, не приемлющего других лидеров и постоянно тянущего одеяло с других групп на себя, то мы не сработаемся.</dd>
      </dl>
    </div>
  </article>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faUsers, faDove } from '@fortawesome/free-solid-svg-icons';
import Features from '@/components/Features.vue';
import Feature from '@/components/Feature.vue';

library.add(faComments, faUsers, faDove);

export default {
  components: {
    Features,
    Feature,
  },
};
</script>
