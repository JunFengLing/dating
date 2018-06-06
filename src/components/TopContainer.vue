<template>
  <section class="top-container">
    <div class="title"></div>
    <div class="wrapper">
      <div class="left-container" v-on:click="changAvatar()">
        <div class="avatar-bg"></div>
        <div class="avatar"></div>
      </div>
      <div class="center-container">
        <div class="name">{{ name }}</div>
        <coin></coin>
      </div>
      <div class="right-container">
        <div class="recharge" v-on:click="rechange()"></div>
        <div class="lottery" v-on:click="lottery()"></div>
        <div class="task" v-on:click="task()"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Coin from './Coin'

export default {
  name: 'top-container',
  data () {
    return {
      name: '这里是玩家名称'
    }
  },
  computed: {

  },
  methods: {
    changAvatar () {
      alert('chang avatar')
    },
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
  mounted () {

  },
  components: {
    'coin': Coin
  }
}
</script>

<style scoped>
.title {
  width: 368px;
  height: 91px;
  margin: 0 auto 30px;
  background: url(../assets/image/game/标题.png) no-repeat;
  background-size: 100% 100%;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  height: 101px;
  margin: 0 10px;
}
.left-container {
  position: relative;
  width: 100px;
  height: 100%;
}
.center-container {
  flex: 1;
}
.right-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
}
.avatar-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 100%;
  background: url(../assets/image/game/头像背景.png) no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
.avatar {

}
.name {
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  text-align: left;
}
.right-container div {
  width: 112px;
  height: 70px;
}
.recharge {
  background: url(../assets/image/game/充值按钮.png) no-repeat;
  background-size: 100% 100%;
}
.lottery {
  background: url(../assets/image/game/抽奖按钮.png) no-repeat;
  background-size: 100% 100%;
}
.task {
  background: url(../assets/image/game/任务.png) no-repeat;
  background-size: 100% 100%;
}
</style>
