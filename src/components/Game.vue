<template>
  <section class="game">
    <comp-title></comp-title>
    <div class="container">
      <avatar></avatar>
      <div class="btn-container">
        <div class="recharge-btn" v-on:click="rechange()"></div>
        <div class="lottery-btn" v-on:click="lottery()"></div>
        <div class="task-btn" v-on:click="task()"></div>
      </div>
    </div>
    <div class="advertisement"></div>
    <message></message>
    <game-entry></game-entry>
    <navigation></navigation>
  </section>
</template>

<script>
import eventBus from '../eventBus.js'

import Title from './Title'
import Avatar from './Avatar'
import Message from './Message'
import GameEntry from './GameEntry'
import Navigation from './Navigation'

export default {
  name: 'game',
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
  methods: {
    rechange () {
      eventBus.$emit('NotifyShowCharge')
    },
    lottery () {
      alert('lottery')
    },
    task () {
      eventBus.$emit('NotifyShowTask')
    }
  },
  components: {
    'comp-title': Title,
    'avatar': Avatar,
    'message': Message,
    'game-entry': GameEntry,
    'navigation': Navigation
  },
  mounted () {
    eventBus.$on('NotifyShowPage', params => {
      this.page = params.page
    })
  }
}
</script>

<style scoped>
.game {
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
.container, .btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-container div {
  width: 112px;
  height: 70px;
}
.recharge-btn {
  background: url(../assets/image/game/充值按钮.png) no-repeat;
  background-size: 100% 100%;
}
.lottery-btn {
  background: url(../assets/image/game/抽奖按钮.png) no-repeat;
  background-size: 100% 100%;
}
.task-btn {
  background: url(../assets/image/game/任务.png) no-repeat;
  background-size: 100% 100%;
}
.advertisement {
  height: 260px;
  background: url(../assets/image/game/系统消息背景.png) repeat;
}
</style>
