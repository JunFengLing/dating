<template>
  <div id="app">
    <div id="title"></div>
    <top-container></top-container>
    <middle-container></middle-container>
    <bottom-container></bottom-container>
    <navigation></navigation>
    <!-- <section id="top">
      <div id="container">
      </div>
      <div id="message-container">
        <div id="advertisement"></div>
        <div id="broadcast">
          <div id="broadcast-icon"></div>
          <div id="broadcast-message">
            <marquee direction="up" scrolldelay="300">
              <div v-for="item in message">{{ item }}</div>
            </marquee>
          </div>
        </div>
      </div>
    </section>
    <section id="game-container">
      <div id="game-container-text">全部游戏</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div id="game-entry">
              <div>
                <img src="./assets/image/游戏icon_1.png" width="100%" height="100%"/>
              </div>
              <div>
                <img src="./assets/image/游戏icon_1.png" width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      <!-- </div>
    </section> -->

  </div>
</template>

<script>
import Swiper from '../static/js/swiper-4.2.2.min.js'

import TopContainer from './components/TopContainer'
import MiddleContainer from './components/MiddleContainer'
import BottomContainer from './components/BottomContainer'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  data () {
    return {
      message: [
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
      let mySwiper = new Swiper('.swiper-container', {
        // 可选选项，自动滑动
        // autoplay: true,
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper()
    })
  },
  components: {
    'top-container': TopContainer,
    'middle-container': MiddleContainer,
    'bottom-container': BottomContainer,
    'navigation': Navigation
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 1377px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  background: url(./assets/image/背景.png) no-repeat;
  background-size: 100% 100%;
}
#title {
  width: 368px;
  height: 91px;
  margin: 0 auto;
  background: url(./assets/image/标题.png) no-repeat;
  background-size: 100% 100%;
}
/*#app, #container, #left-container, #center-container, #right-container, #coin-container, #broadcast, #game-entry {
  display: flex;
}
#app, #center-container {
  flex-direction: column;
}
#app, #container, #coin-container, #game-entry {
  justify-content: space-between;
}
#advertisement {
  height: 220px;
  margin-top: 30px;
  padding: 20px;
  background: url(./assets/image/系统消息背景.png) repeat;
}
#broadcast {
  height: 68px;
  line-height: 68px;
  margin-top: 2px;
  background: url(./assets/image/系统消息背景.png) repeat;
}
#broadcast-icon {
  width: 37px;
  height: 36px;
  margin: auto 20px;
  background: url(./assets/image/喇叭标志.png) no-repeat;
  background-size: 100% 100%;
}
#broadcast-message {
  padding: 10px;
}
marquee {
  height: 48px;
}
marquee div {
  height: 48px;
  line-height: 48px;
}
#game-entry {
  width: 580px;
  height: 440px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
}
#game-entry div {
  width: 260px;
  height: 100%;
}
#game-container {
  height: 718px;
}
#game-container-text {
  text-align: center;
  height: 100px;
  line-height: 100px;
}
.swiper-container {
  height: 618px;
}*/
</style>
