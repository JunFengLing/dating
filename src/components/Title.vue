<template>
  <section class="comp-title" v-bind:style="titleImg"></section>
</template>

<script>
import eventBus from '../eventBus.js'

export default {
  name: 'comp-title',
  data () {
    return {
      page: 'game'
    }
  },
  computed: {
    titleImg () {
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
  mounted () {
    eventBus.$on('NotifyShowPage', params => {
      this.page = params.page
    })
  }
}
</script>

<style scoped>
.comp-title {
  width: 368px;
  height: 91px;
  margin: 0 auto;
}
</style>
