<template>
  <section class="navigation">
    <div v-bind:class="gameBtnClass" v-on:click="game()"></div>
    <div v-bind:class="shopBtnClass" v-on:click="shop()"></div>
  </section>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      currTab: 'game'
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

  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  height: 82px;
}
.navigation div {
  flex: 1;
}
.inactive-game-btn {
  background: url(../assets/image/game/游戏按钮_1.png) no-repeat;
  background-size: 100% 100%;
}
.active-game-btn {
  background: url(../assets/image/game/游戏按钮_2.png) no-repeat;
  background-size: 100% 100%;
}
.inactive-shop-btn {
  background: url(../assets/image/game/商城按钮_1.png) no-repeat;
  background-size: 100% 100%;
}
.active-shop-btn {
  background: url(../assets/image/game/商城按钮_2.png) no-repeat;
  background-size: 100% 100%;
}
</style>
