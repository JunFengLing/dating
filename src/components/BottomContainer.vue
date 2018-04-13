<template>
  <section class="game">
    <div class="title">全部游戏</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(itemList, index) in gameList" v-bind:key="index">
          <div class="game-icon">
            <div v-for="(item, index) in itemList" v-bind:key="index">
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
  name: 'bottom-container',
  data () {
    return {
      gameList: [
        [
          {
            img: require('../assets/image/游戏icon_1.png'),
            url: ''
          },
          {
            img: require('../assets/image/游戏icon_1.png'),
            url: ''
          }
        ],
        [
          {
            img: require('../assets/image/游戏icon_1.png'),
            url: ''
          },
          {
            img: require('../assets/image/游戏icon_1.png'),
            url: ''
          }
        ],
        [
          {
            img: require('../assets/image/游戏icon_1.png'),
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
      return new Swiper('.game .swiper-container', {
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
.game {
  height: 686px;
}
.title {
  height: 72px;
  line-height: 72px;
}
.swiper-container {
  height: 614px;
}
.game-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 574px;
  height: 100%;
  margin: 0 auto;
}
.game-icon div {
  width: 260px;
  height: 440px;
}
</style>
