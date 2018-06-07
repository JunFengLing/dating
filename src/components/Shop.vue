<template>
  <section class="shop">
    <comp-title></comp-title>
  </section>
</template>

<script>
import eventBus from '../eventBus.js'

import Title from './Title'

export default {
  name: 'component-title',
  data () {
    return {
      page: 'game'
    }
  },
  computed: {
    titleStyle () {
      const titleObj = {
        game: '游戏_标题',
        shop: '商城_标题',
        profile: '个人中心_标题'
      }
      return {
        'backgroundImage': `url(../../static/image/${titleObj[this.page]}.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  },
  components: {
    'comp-title': Title
  },
  mounted () {
    eventBus.$on('NotifyShowPage', params => {
      this.page = params.page
    })
  }
}
</script>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background: url(../assets/image/game/背景.png) no-repeat;
  background-size: 100% 100%;
}
</style>
