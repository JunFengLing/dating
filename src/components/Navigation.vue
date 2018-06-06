<template>
  <section class="navigation">
    <div v-bind:style="gameBtnStyle" v-on:click="game()"></div>
    <div v-bind:style="shopBtnStyle" v-on:click="shop()"></div>
  </section>
</template>

<script>
import eventBus from '../eventBus.js'

export default {
  name: 'navigation',
  data () {
    return {
      page: 'game'
    }
  },
  computed: {
    gameBtnStyle () {
      let gameBtn = this.page === 'game' ? '游戏_按钮_2' : '游戏_按钮_1'
      return {
        'backgroundImage': `url(../../static/image/${gameBtn}.png)`,
        'backgroundSize': '100% 100%'
      }
    },
    shopBtnStyle () {
      let shopBtn = this.page === 'shop' ? '商城_按钮_2' : '商城_按钮_1'
      return {
        'backgroundImage': `url(../../static/image/${shopBtn}.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  },
  methods: {
    game () {
      if (this.page === 'shop') {
        eventBus.$emit('NotifyShowPage', {
          page: 'game'
        })
      }
    },
    shop () {
      if (this.page === 'game') {
        eventBus.$emit('NotifyShowPage', {
          page: 'shop'
        })
      }
    }
  },
  mounted () {
    eventBus.$on('NotifyShowPage', params => {
      this.page = params.page
    })
  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  width: 750px;
  height: 82px;
}
.navigation div {
  flex: 1;
}
</style>
