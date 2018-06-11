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

  },
  methods: {
    rechange () {
      eventBus.$emit('NotifyShowCharge')
    },
    lottery () {
      eventBus.$emit('NotifyShowPage', {
        page: 'profile'
      })
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
  background-image: url(../../static/image/背景.png);
  background-size: 100% 100%;
}
.container, .btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  margin: 0 12px;
}
.btn-container {
  width: 350px;
}
.btn-container div {
  width: 112px;
  height: 70px;
}
.recharge-btn {
  background-image: url(../../static/image/游戏_充值按钮.png);
  background-size: 100% 100%;
}
.lottery-btn {
  background-image: url(../../static/image/游戏_抽奖按钮.png);
  background-size: 100% 100%;
}
.task-btn {
  background-image: url(../../static/image/游戏_任务按钮.png);
  background-size: 100% 100%;
}
.advertisement {
  height: 260px;
  background-color: rgba(52,20,12,0.6)
}
</style>
