<template>
  <section class="system-message">
    <div class="system-message-icon"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in broadcastMsg"
          v-bind:key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from '../../static/js/swiper-4.2.2.min.js'

export default {
  name: 'system-message',
  data () {
    return {
      broadcastMsg: [
        '爱过的人我已不再拥有',
        '许多故事有伤心的理由',
        '这一次我的爱情等不到天长地久',
        '错过的人是否可以回首',
        '爱过的心没有任何讲求',
        '许多故事有伤心的理由',
        '这一次我的爱情等不到天长地久',
        '走过的路再也不能停留',
        '一千个伤心的理由',
        '一千个伤心的理由',
        '最后我的爱情在故事里慢慢陈旧'
      ]
    }
  },
  computed: {

  },
  methods: {
    swiper () {
      return new Swiper('.system-message .swiper-container', {
        autoplay: true,
        direction: 'vertical',
        loop: true
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper()
    })
  }
}
</script>

<style scoped>
.system-message {
  display: flex;
  height: 70px;
  line-height: 70px;
  margin-top: 2px;
  background: url(../assets/image/game/系统消息背景.png) repeat;
}
.system-message-icon {
  width: 37px;
  height: 36px;
  margin: auto 20px;
  background: url(../assets/image/game/喇叭标志.png) no-repeat;
  background-size: 100% 100%;
}
.swiper-container {
  flex: 1;
  text-align: left;
}
</style>
