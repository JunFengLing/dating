<template>
  <section class="container">
    <div class="left-container">
      <div class="avatar" v-on:click="changAvatar()"></div>
    </div>
    <div class="center-container">
      <div class="name">{{ this.name }}</div>
      <div class="coin-container">
        <div class="coin"></div>
        <div></div>
        <div class="add-coin" v-on:click="addCoin()"></div>
      </div>
    </div>
    <div class="right-container">
      <div class="recharge" v-on:click="rechange()"></div>
      <div class="lottery" v-on:click="lottery()"></div>
      <div class="task" v-on:click="task()"></div>
    </div>
  </section>
</template>

<script>
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

    },
    addCoin () {

    },
    rechange () {

    },
    lottery () {

    },
    task () {

    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 101px;
  margin: 0 10px;
}
.avatar {
  width: 100px;
  height: 100%;
  background: url(../assets/image/头像背景.png) no-repeat;
  background-size: 100% 100%;
}
#name {
  height: 50px;
  line-height: 50px;
}
#avatar {
  background: url(../assets/image/头像背景.png) no-repeat;
  background-size: 100% 100%;
}
/*#coin {
  width: 48px;
  height: 50px;
  background: url(../assets/image/金币.png) no-repeat;
  background-size: 100% 100%;
}
#add-coin {
  width: 50px;
  height: 50px;
  background: url(../assets/image/加金币按钮.png) no-repeat;
  background-size: 100% 100%;
}*/
.right-container {
  display: flex;
  justify-content: space-between;
  width: 346px;
  margin-top: 20px;
}
.right-container div {
  width: 112px;
  height: 70px;
}
.recharge {
  background: url(../assets/image/充值按钮.png) no-repeat;
  background-size: 100% 100%;
}
.lottery {
  background: url(../assets/image/抽奖按钮.png) no-repeat;
  background-size: 100% 100%;
}
.task {
  background: url(../assets/image/任务.png) no-repeat;
  background-size: 100% 100%;
}
</style>
