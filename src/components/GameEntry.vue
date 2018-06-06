<template>
  <section class="game-entry">
    <div class="title">全部游戏</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(itemList, index) in gameList" v-bind:key="index">
          <div class="game-wrapper">
            <div v-for="item in itemList" v-bind:key="item.id">
              <img v-bind:src="item.img" width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
</template>

<script>
import Swiper from '../../static/js/swiper-4.2.2.min.js'

export default {
  name: 'game-entry',
  data () {
    return {
      gameList: [
        [
          {
            id: 0,
            img: require('../assets/image/game/游戏icon_1.png'),
            url: ''
          },
          {
            id: 1,
            img: require('../assets/image/game/游戏icon_1.png'),
            url: ''
          }
        ],
        [
          {
            id: 2,
            img: require('../assets/image/game/游戏icon_1.png'),
            url: ''
          },
          {
            id: 3,
            img: require('../assets/image/game/游戏icon_1.png'),
            url: ''
          }
        ],
        [
          {
            id: 4,
            img: require('../assets/image/game/游戏icon_1.png'),
            url: ''
          }
        ]
      ]
    }
  },
  computed: {

  },
  methods: {
    swiper () {
      return new Swiper('.game-entry .swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
.game-entry {
  height: 690px;
}
.title {
  height: 70px;
  line-height: 70px;
}
.swiper-container {
  height: 620px;
}
.game-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 580px;
  height: 100%;
  margin: 0 auto;
}
.game-wrapper div {
  width: 260px;
  height: 440px;
}
</style>
