<template>
  <div id="app">
    <section id="title"></section>
    <section id="top">
      <div id="container">
        <div id="left-container">
          <div id="avatar" v-on:click="changAvatar()"></div>
        </div>
        <div id="center-container">
          <div id="name">{{ this.name }}</div>
          <div id="coin-container">
            <div id="coin"></div>
            <div></div>
            <div id="add-coin" v-on:click="addCoin()"></div>
          </div>
        </div>
        <div id="right-container">
          <div id="recharge" v-on:click="rechange()"></div>
          <div id="lottery" v-on:click="lottery()"></div>
          <div id="task" v-on:click="task()"></div>
        </div>
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
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </section>
    <section id="tab-container">
      <div id="game-btn" v-bind:class="gameBtnClass" v-on:click="game()"></div>
      <div id="shop-btn" v-bind:class="shopBtnClass" v-on:click="shop()"></div>
    </section>
  </div>
</template>

<script>
import Swiper from '../static/js/swiper-4.2.2.min.js'

export default {
  name: 'App',
  data () {
    return {
      name: '这里是玩家名称',
      currTab: 'game',
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
    gameBtnClass () {
      return this.currTab === 'game' ? 'active-game-btn' : 'inactive-game-btn'
    },
    shopBtnClass () {
      return this.currTab === 'shop' ? 'active-shop-btn' : 'inactive-shop-btn'
    }
  },
  methods: {
    changAvatar () {

    },
    addCoin () {

    },
    rechange () {

    },
    lottery () {

    },
    task () {

    },
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
        },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      })
    },
    game () {
      if (this.currTab === 'shop') {
        this.currTab = 'game'
        console.log(this.currTab)
      }
    },
    shop () {
      if (this.currTab === 'game') {
        this.currTab = 'shop'
        console.log(this.currTab)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper()
    })
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  width: 100%;
  height: 1377px;
  background: url(./assets/image/背景.png) no-repeat;
  background-size: 100% 100%;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
}
#title {
  width: 368px;
  height: 91px;
  margin: 0 auto 25px;
  background: url(./assets/image/标题.png) no-repeat;
  background-size: 100% 100%;
}
#app, #container, #left-container, #center-container, #right-container, #coin-container, #broadcast, #game-entry, #tab-container {
  display: flex;
}
#app, #center-container {
  flex-direction: column;
}
#app, #container, #coin-container, #game-entry {
  justify-content: space-between;
}
#container {
  margin: 0 10px;
}
#coin-container {
  width: 256px;
}
#right-container {
  margin-top: 20px;
}
#name {
  height: 50px;
  line-height: 50px;
}
#avatar {
  width: 100px;
  height: 101px;
  background: url(./assets/image/头像背景.png) no-repeat;
  background-size: 100% 100%;
}
#coin {
  width: 48px;
  height: 50px;
  background: url(./assets/image/金币.png) no-repeat;
  background-size: 100% 100%;
}
#add-coin {
  width: 50px;
  height: 50px;
  background: url(./assets/image/加金币按钮.png) no-repeat;
  background-size: 100% 100%;
}
#recharge, #lottery, #task {
  width: 112px;
  height: 70px;
  margin-left: 5px;
}
#recharge {
  background: url(./assets/image/充值按钮.png) no-repeat;
  background-size: 100% 100%;
}
#lottery {
  background: url(./assets/image/抽奖按钮.png) no-repeat;
  background-size: 100% 100%;
}
#task {
  background: url(./assets/image/任务.png) no-repeat;
  background-size: 100% 100%;
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
#game-btn, #shop-btn {
  flex: 1;
  height: 82px;
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
}
.inactive-game-btn {
  background: url(./assets/image/游戏按钮_1.png) no-repeat;
  background-size: 100% 100%;
}
.active-game-btn {
  background: url(./assets/image/游戏按钮_2.png) no-repeat;
  background-size: 100% 100%;
}
.inactive-shop-btn {
  background: url(./assets/image/商城按钮_1.png) no-repeat;
  background-size: 100% 100%;
}
.active-shop-btn {
  background: url(./assets/image/商城按钮_2.png) no-repeat;
  background-size: 100% 100%;
}
</style>
