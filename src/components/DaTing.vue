<template>
  <section class="da-ting">
    <div class="title" v-bind:style="title"></div>
    <div class="top-container">
      <avatar></avatar>
      <div class="btn-container">
        <div class="game-btn-container" v-show="showGame">
          <div class="recharge-btn" v-on:click="rechange()"></div>
          <div class="lottery-btn" v-on:click="lottery()"></div>
          <div class="task-btn" v-on:click="task()"></div>
        </div>
        <div class="modify-btn" v-show="showProfile" v-on:click="modify()"></div>
      </div>
    </div>
    <div class="advertisement" v-show="showGame"></div>
    <system-message v-show="showGame||showShop"></system-message>
    <game-entry v-show="showGame"></game-entry>
    <navigation v-show="showGame||showShop"></navigation>
  </section>
</template>

<script>
import Avatar from './Avatar'
import SystemMessage from './SystemMessage'
import GameEntry from './GameEntry'
import Navigation from './Navigation'

export default {
  name: 'da-ting',
  data () {
    return {
      showGame: true,
      showShop: false,
      showProfile: false
    }
  },
  computed: {
    title () {
      let title = ''
      if (this.showGame) {
        title = '游戏_标题'
      } else if (this.showShop) {
        title = '商城_标题'
      } else if (this.showProfile) {
        title = '个人中心_标题'
      } else {

      }
      return {
        'background': `url(../static/image/${title}.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  },
  methods: {
    rechange () {
      alert('rechange')
    },
    lottery () {
      alert('lottery')
    },
    task () {
      alert('lottery')
    }
  },
  components: {
    'avatar': Avatar,
    'system-message': SystemMessage,
    'game-entry': GameEntry,
    'navigation': Navigation
  }
}
</script>

<style scoped>
.da-ting {
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
.title {
  width: 368px;
  height: 91px;
  margin: 0 auto 30px;
}
.top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-container {

}
.game-btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.game-btn-container div {
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
.modify-btn {
  width: 158px;
  height: 66px;
  margin-right: 30px;
  background: url(../../static/image/个人中心_修改资料按钮.png) no-repeat;
  background-size: 100% 100%;
}
.advertisement {
  height: 260px;
  background: url(../assets/image/game/系统消息背景.png) repeat;
}
</style>
